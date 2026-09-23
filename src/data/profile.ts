import type { User } from '../types/profile';

export const PROFILE: User = {
  firstName: 'Alex',
  lastName: 'Huaracha',
  displayName: 'Alex Huaracha',
  gender: 'male',
  pronouns: 'he/him',
  flipSentences: [
    'AI Engineer',
    'Building LLM agents & RAG pipelines',
    'Creating with code. Small details matter.',
  ],
  address: 'Arequipa City, Perú',
  phoneNumber: 'KzUxOTYyMzM0NzEy',
  email: 'YWxleGh1YXJhY2hhcUBnbWFpbC5jb20=',
  website: 'https://alexhuaracha.vercel.app',
  jobTitle: 'AI Engineer',
  jobs: [
    {
      title: 'AI Engineer',
      company: 'Transportes Hagemsa',
      website: 'https://transporteshagemsa.com',
    },
  ],
  about: `
  - **AI Engineer** and **Systems Engineering** graduate from National University of San Agustin, with 3+ years building production software.
  - Focused on **LLM-powered agents** (**LangChain**, **LangGraph**, **MCP**) and **RAG pipelines** over **PostgreSQL/pgvector**, backed by solid **Python** and **TypeScript** backends (**FastAPI**, **Django**, **NestJS**).
  - Experienced in **Deep Learning** (**LSTM**, **TensorFlow**, **XGBoost**) for spatial-temporal data, and in shipping to the cloud with **Docker**, **AWS**, and CI/CD.
  - Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
  `,
  avatar: '/images/avatar.jpg',
  timeZone: 'America/Lima',
  keywords: [
    'Alex Huaracha',
    'Alex Huaracha Portfolio',
    'Alex Huaracha Profile',
  ],
  dateCreated: '2025-12-05', // YYYY-MM-DD
};
