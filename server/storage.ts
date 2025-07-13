import { ContactSubmission, InsertContactSubmission, CmsContent, InsertCmsContent, UpdateCmsContent, CmsAuth, InsertCmsAuth } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { contactSubmissions, cmsContent, cmsAuth } from "@shared/schema";
import bcrypt from "bcrypt";

export interface IStorage {
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // CMS Content
  getCmsContent(section?: string): Promise<CmsContent[]>;
  getCmsContentBySection(section: string): Promise<CmsContent | undefined>;
  createCmsContent(content: InsertCmsContent): Promise<CmsContent>;
  updateCmsContent(id: number, content: UpdateCmsContent): Promise<CmsContent>;
  deleteCmsContent(id: number): Promise<void>;
  
  // CMS Authentication
  getCmsUser(username: string): Promise<CmsAuth | undefined>;
  createCmsUser(user: InsertCmsAuth): Promise<CmsAuth>;
  verifyPassword(password: string, hash: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export class DatabaseStorage implements IStorage {
  // Contact submissions
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }

  // CMS Content
  async getCmsContent(section?: string): Promise<CmsContent[]> {
    if (section) {
      return await db.select().from(cmsContent).where(eq(cmsContent.section, section));
    }
    return await db.select().from(cmsContent).orderBy(cmsContent.section);
  }

  async getCmsContentBySection(section: string): Promise<CmsContent | undefined> {
    const [content] = await db
      .select()
      .from(cmsContent)
      .where(eq(cmsContent.section, section))
      .limit(1);
    return content;
  }

  async createCmsContent(content: InsertCmsContent): Promise<CmsContent> {
    const [newContent] = await db
      .insert(cmsContent)
      .values(content)
      .returning();
    return newContent;
  }

  async updateCmsContent(id: number, content: UpdateCmsContent): Promise<CmsContent> {
    const [updatedContent] = await db
      .update(cmsContent)
      .set({ ...content, updatedAt: new Date() })
      .where(eq(cmsContent.id, id))
      .returning();
    return updatedContent;
  }

  async deleteCmsContent(id: number): Promise<void> {
    await db.delete(cmsContent).where(eq(cmsContent.id, id));
  }

  // CMS Authentication
  async getCmsUser(username: string): Promise<CmsAuth | undefined> {
    const [user] = await db
      .select()
      .from(cmsAuth)
      .where(eq(cmsAuth.username, username))
      .limit(1);
    return user;
  }

  async createCmsUser(user: InsertCmsAuth): Promise<CmsAuth> {
    const [newUser] = await db
      .insert(cmsAuth)
      .values(user)
      .returning();
    return newUser;
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}

export const storage = new DatabaseStorage();
