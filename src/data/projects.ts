import type { Project } from '../types/projects';

export const PROJECTS: Project[] = [
  // Alex Huaracha Portfolio
  {
    id: 'portfolio-project',
    title: 'alexhuaracha.vercel.app',
    period: {
      start: '12.2025',
    },
    link: 'https://alexhuaracha.vercel.app',
    repository: '',
    skills: [
      'TypeScript',
      'Tailwind CSS',
      'React',
      'react-markdown',
      '@radix-ui',
      'clsx',
      'Vercel',
    ],
    description: `
A minimal, dev portfolio.

Featured:
- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized (JSON-LD schema, sitemap, robots) -> Ongoing
- Spam-protected email and phone number
`,
    isExpanded: true,
    logo: '/ah-icon.svg',
  },
  // Spotter
  {
    id: 'spotter-project',
    title: 'Spotter',
    period: {
      start: '12.2025',
      end: '12.2025',
    },
    link: 'https://spotter-project-pi.vercel.app/',
    repository: 'https://github.com/Alex-Huaracha/spotter-project',
    skills: [
      'Open Source',
      'Node.js',
      'Express',
      'JavaScript',
      'PostgreSQL',
      'React',
      'Tailwind CSS',
      'Monorepo',
      'Passport.js',
      'Zod Validation',
    ],
    description: `
A full-stack social media platform for fitness enthusiasts to share workouts, connect with gym buddies, and track their fitness journey. / Full-Stack by me

Features:
- 🔐 Authentication (register, login, session-based)
- 📝 Create, edit, delete posts (280 char limit)
- 💬 Comment on posts (threaded replies)
- ❤️ Like/unlike posts and comments
- 👤 User profiles with customizable bio, goals, and avatar
- 👥 Follow/unfollow users
- 📰 Personalized feed with posts from followed users
- 🔍 User suggestions (who to follow)
`,
    logo: '/icons-project/the-odin-project.svg',
  },
  // Find Me - Pokemon Edition
  {
    id: 'find-me-project',
    title: 'Find Me - Pokemon Edition',
    period: {
      start: '11.2025',
      end: '11.2025',
    },
    link: 'https://find-me-five-lilac.vercel.app/',
    repository: 'https://github.com/Alex-Huaracha/find-me',
    skills: ['React', 'CSS3', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Express'],
    description: `
A "Where's Waldo?" style game featuring Pokemon characters. Find all hidden Pokemon as fast as you can and compete on the leaderboard.

Features:
- 🎮 Interactive Pokemon search game
- ⏱️ Real-time timer
- 🏆 Leaderboard system
- 📱 Responsive design
`,
    logo: '/icons-project/pokemon-project.svg',
  },
  // CV Forge
  {
    id: 'cv-forge-project',
    title: 'CV Forge',
    period: {
      start: '10.2025',
      end: '10.2025',
    },
    link: 'https://cv-forge-one.vercel.app',
    repository: 'https://github.com/Alex-Huaracha/cv-forge',
    skills: ['React', 'CSS3', 'Vite', '@react-pdf/renderer'],
    description: `
A modern CV/resume builder built with React and Vite. Create, edit, and download professional resumes in PDF format.

Features:
- ⚡ **Real-time preview** - See changes as you type
- 📝 **PDF export** - Download your CV as a high-quality PDF
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- 📂 **Sections included:**
  - 👤 Personal Information
  - 🎓 Education
  - 💼 Work Experience
  - 🗂️ Projects
  - 🛠️ Technical Skills
`,
    logo: '/icons-project/cv-forge-project.svg',
  },
  // Gym Blog API
  {
    id: 'gym-blog-project',
    title: 'Gym Blog API',
    period: {
      start: '11.2025',
      end: '11.2025',
    },
    link: 'https://gym-blog-chi.vercel.app/',
    repository: 'https://github.com/Alex-Huaracha/gym-blog',
    skills: [
      'React',
      'Tailwind',
      'React Router',
      'Node.js',
      'Express',
      'JWT Authentication',
      'bycrypt Password Hashing',
    ],
    description: `
A full-stack blog application for fitness content with separate client and admin interfaces.

Client App:
- 📖 View published blog posts
- 📰 Read full articles with comments
- 🔐 User registration and login
- 💬 Post comments (authenticated users only)

Admin App:
- 🔒 Secure admin authentication
- ✏️ Create, edit, and delete posts
- 📤 Manage post publication status
- 📋 View all posts (published and drafts)
`,
  },
  // File Uploader
  {
    id: 'file-uploader-project',
    title: 'File Uploader',
    period: {
      start: '11.2025',
      end: '11.2025',
    },
    link: 'https://file-uploader-9zcg.onrender.com/',
    repository: 'https://github.com/Alex-Huaracha/file-uploader',
    skills: [
      'Cloudinary',
      'React',
      'Tailwind',
      'React Router',
      'Node.js',
      'Express',
      'JWT Authentication',
      'bycrypt Password Hashing',
    ],
    description: `
A minimalist cloud storage application built with Node.js, Express, and Prisma. Upload, organize, and share your files securely.

Features:
- 🔐 Authentication - Secure login and registration with Passport.js
- 📂 Folder Management - Create, rename, and organize folders
- 📤 File Upload - Upload files to cloud storage (Cloudinary)
- 🔗 Share Links - Generate time-limited share links for folders
- 🎨 Dark Theme - Minimalist dark UI design
`,
  },
  // Messaging App
  {
    id: 'messaging-project',
    title: 'Messaging App',
    period: {
      start: '11.2025',
      end: '11.2025',
    },
    repository: 'https://github.com/Alex-Huaracha/messaging-app',
    skills: [
      'Express',
      'Node.js',
      'Prisma ORM',
      'JWT Authentication',
      'bycrypt Password Hashing',
      'PostgreSQL',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Zod Validation',
    ],
    description: `
A real-time messaging application built with React and Express.
- 🔐 User authentication (signup/login)
- 👥 Real-time messaging with polling
- 💬 User list and conversation history
- 💎 Glassmorphism UI design
`,
  },
  // The Speakeasy
  {
    id: 'the-speakeasy-project',
    title: 'The Speakeasy',
    period: {
      start: '11.2025',
      end: '11.2025',
    },
    link: 'https://the-speakeasy.onrender.com',
    repository: 'https://github.com/Alex-Huaracha/the-speakeasy',
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'EJS',
      'Passport.js',
      'bycrypt Password Hashing',
      'Express Sessions',
      'Express Validation',
    ],
    description: `
A members-only clubhouse web application where users can write anonymous posts. Only members can see who wrote which post, and only admins can delete messages.

Features:
- 🔐 User Authentication: Sign up, log in, and log out functionality
- 🏷️ Membership System: Users can join the club with a secret passcode
- 🕵️ Anonymous Posts: Non-members see posts as anonymous
- 👤 Member Privileges: Members can see post authors and timestamps
- 🛡️ Admin Controls: Admins can delete any message
- 🔒 Secure: Password hashing with bcrypt and session-based authentication
`,
  },
  // Prev Portfolio
  {
    id: 'previous-portfolio-project',
    title: 'Previous Portfolio',
    period: {
      start: '07.2025',
      end: '07.2025',
    },
    link: 'https://portfolio-khaki-seven-93.vercel.app',
    repository: 'https://github.com/Alex-Huaracha/portfolio',
    skills: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    description: `
This was my previous developer portfolio website, showcasing my projects and skills.`,
    logo: '/icons-project/prev-portfolio-project.svg',
  },
];
