import { storage } from "./storage";

async function createDefaultUser() {
  try {
    const existingUser = await storage.getCmsUser('admin');
    if (existingUser) {
      console.log('Admin user already exists');
      return;
    }
    
    const hashedPassword = await storage.hashPassword('admin123');
    await storage.createCmsUser({
      username: 'admin',
      passwordHash: hashedPassword,
      isActive: true
    });
    
    console.log('Default admin user created successfully');
    console.log('Username: admin');
    console.log('Password: admin123');
  } catch (error) {
    console.error('Error creating default user:', error);
  }
  process.exit(0);
}

createDefaultUser();