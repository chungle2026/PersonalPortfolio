import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertCmsContentSchema, updateCmsContentSchema } from "@shared/schema";
import { z } from "zod";

// CMS Authentication middleware
async function cmsAuth(req: any, res: any, next: any) {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(401).json({ error: "Username and password required" });
  }
  
  try {
    const user = await storage.getCmsUser(username);
    if (!user || !user.isActive) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    
    const isValidPassword = await storage.verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    
    req.cmsUser = user;
    next();
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
}

// Simple session middleware for CMS
const cmsSessions = new Map<string, { userId: number; expires: Date }>();

function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function cmsSession(req: any, res: any, next: any) {
  const sessionId = req.headers['x-session-id'] || req.query.sessionId;
  
  if (!sessionId) {
    return res.status(401).json({ error: "No session ID provided" });
  }
  
  const session = cmsSessions.get(sessionId);
  if (!session || session.expires < new Date()) {
    cmsSessions.delete(sessionId);
    return res.status(401).json({ error: "Invalid or expired session" });
  }
  
  // Extend session
  session.expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  req.sessionId = sessionId;
  req.userId = session.userId;
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // CMS Authentication endpoint
  app.post("/api/cms/login", cmsAuth, async (req, res) => {
    try {
      const sessionId = generateSessionId();
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
      
      cmsSessions.set(sessionId, {
        userId: req.cmsUser.id,
        expires
      });
      
      res.json({ sessionId, expires });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // CMS Logout endpoint
  app.post("/api/cms/logout", (req, res) => {
    const sessionId = req.headers['x-session-id'] || req.query.sessionId;
    if (sessionId) {
      cmsSessions.delete(sessionId);
    }
    res.json({ message: "Logged out successfully" });
  });

  // CMS Content endpoints
  app.get("/api/cms/content", cmsSession, async (req, res) => {
    try {
      const { section } = req.query;
      const content = await storage.getCmsContent(section as string);
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve content" });
    }
  });

  app.get("/api/cms/content/:section", cmsSession, async (req, res) => {
    try {
      const { section } = req.params;
      const content = await storage.getCmsContentBySection(section);
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve content" });
    }
  });

  app.post("/api/cms/content", cmsSession, async (req, res) => {
    try {
      const validatedData = insertCmsContentSchema.parse(req.body);
      const content = await storage.createCmsContent(validatedData);
      res.status(201).json(content);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create content" });
      }
    }
  });

  app.put("/api/cms/content/:id", cmsSession, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = updateCmsContentSchema.parse(req.body);
      const content = await storage.updateCmsContent(id, validatedData);
      res.json(content);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to update content" });
      }
    }
  });

  app.delete("/api/cms/content/:id", cmsSession, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteCmsContent(id);
      res.json({ message: "Content deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete content" });
    }
  });

  // Public endpoint to get content (for display on website)
  app.get("/api/content/:section", async (req, res) => {
    try {
      const { section } = req.params;
      const content = await storage.getCmsContentBySection(section);
      res.json(content || null);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve content" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
