import { storage } from "./storage";

async function createSampleContent() {
  try {
    // Hero section content
    await storage.createCmsContent({
      section: 'hero',
      title: 'Lewis Chung',
      content: 'Classical Composer & Pianist - Creating meaningful musical experiences that bridge tradition and innovation',
      isActive: true
    });

    // About section content
    await storage.createCmsContent({
      section: 'about',
      title: 'About Lewis',
      content: 'Lewis Chung is a distinguished classical composer and pianist whose works seamlessly blend traditional techniques with contemporary innovation. With formal training from prestigious institutions and years of performance experience, Lewis creates music that speaks to both the heart and mind.',
      isActive: true
    });

    // Bio section content
    await storage.createCmsContent({
      section: 'bio',
      title: 'Biography',
      content: 'Born into a musical family, Lewis began studying piano at age 5 and composition at 12. He holds degrees from the Royal Conservatory and has performed in major concert halls across Europe and North America. His compositions have been performed by renowned orchestras and chamber ensembles worldwide.',
      isActive: true
    });

    console.log('Sample content created successfully');
  } catch (error) {
    console.error('Error creating sample content:', error);
  }
  process.exit(0);
}

createSampleContent();