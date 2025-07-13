# replit.md

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that creates a professional portfolio website for a classical composer and pianist named Alexander Hartwell. The application features a modern, elegant design with sections for about information, upcoming performances, media gallery, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with tsx for TypeScript execution

### Database Schema
- **Contact Submissions Table**: Stores form submissions with fields for name, email, subject, message, and timestamp
- **Schema Definition**: Located in `shared/schema.ts` using Drizzle ORM with Zod validation

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Main landing area with composer introduction
- **About Section**: Biography, education, and awards information
- **Performances**: Upcoming concerts and events listing
- **Media**: Embedded YouTube videos and audio content
- **Gallery**: Photo gallery with lightbox functionality
- **Contact Form**: Validated contact form with server submission

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom logging middleware for API requests

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod schemas
- **Type Safety**: End-to-end type safety between frontend and backend

## Data Flow

### Contact Form Submission
1. User fills out contact form in frontend
2. Form data validated using Zod schema on client side
3. POST request sent to `/api/contact` endpoint
4. Server validates data using same shared schema
5. Data stored in PostgreSQL database via Drizzle ORM
6. Success/error response returned to client
7. Toast notification displayed to user

### Content Display
- Static content rendered from component data
- Media content embedded from external sources (YouTube, Unsplash)
- Gallery images served from CDN with responsive sizing

## External Dependencies

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **ESLint/Prettier**: Code linting and formatting
- **PostCSS**: CSS processing with Autoprefixer

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component

### Backend Libraries
- **Drizzle ORM**: Type-safe database ORM
- **Zod**: Schema validation library
- **Express**: Web framework
- **Connect PG Simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files in `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Type Checking**: TypeScript compiler validates all code
4. **Database Migration**: Drizzle Kit manages database schema changes

### Environment Configuration
- **Development**: Uses tsx for hot reload and Vite dev server
- **Production**: Serves static files from Express with built assets
- **Database**: Requires `DATABASE_URL` environment variable

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared types and schemas
├── dist/           # Built application files
└── migrations/     # Database migration files
```

The application follows a monorepo structure with clear separation between frontend, backend, and shared code. The build process creates a single deployable package that serves both the static frontend and API backend from the same Express server.