import type { Project } from '../types/projects';

export const PROJECTS: Project[] = [
  {
    id: 'spotter-project',
    title: 'Spotter',
    period: {
      start: '12.2025',
      end: '12.2025',
    },
    link: 'https://spotter-project-pi.vercel.app/',
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
- Engineered a full-stack social media application for fitness enthusiasts using the latest ecosystem standards (**React 19** & **Express 5**).
- Architected a complex relational database schema with **PostgreSQL** and **Prisma ORM** to handle recursive data structures (threaded comments), social graphs (followers/following), and polymorphic interactions (likes).
- Implemented secure **Session-Based Authentication** using Passport.js and bcrypt, ensuring persistent and protected user sessions.
- Developed a dynamic "Personalized Feed" algorithm that aggregates and sorts content based on the user's social connections.
- Built a high-performance, responsive UI with **Tailwind CSS v4** and **Vite**, optimizing load times and interactivity.
`,
    logo: '/public/icons-project/the-odin-project.svg',
    isExpanded: true,
  },
];
