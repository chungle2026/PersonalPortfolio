import { pgTable, text, serial, timestamp, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// CMS Content Schema
export const cmsContent = pgTable("cms_content", {
  id: serial("id").primaryKey(),
  section: varchar("section", { length: 50 }).notNull(), // 'hero', 'about', 'bio', etc.
  title: varchar("title", { length: 255 }),
  content: text("content"),
  imageUrl: varchar("image_url", { length: 500 }),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertCmsContentSchema = createInsertSchema(cmsContent).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateCmsContentSchema = createInsertSchema(cmsContent).omit({
  id: true,
  createdAt: true,
}).partial();

export type InsertCmsContent = z.infer<typeof insertCmsContentSchema>;
export type UpdateCmsContent = z.infer<typeof updateCmsContentSchema>;
export type CmsContent = typeof cmsContent.$inferSelect;

// CMS Authentication Schema
export const cmsAuth = pgTable("cms_auth", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCmsAuthSchema = createInsertSchema(cmsAuth).omit({
  id: true,
  createdAt: true,
});

export type InsertCmsAuth = z.infer<typeof insertCmsAuthSchema>;
export type CmsAuth = typeof cmsAuth.$inferSelect;
