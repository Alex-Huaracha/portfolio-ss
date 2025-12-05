import type { UserProfile } from '../types/profile';

export const profileData: UserProfile = {
  firstName: 'Alex',
  lastName: 'Huaracha',
  displayName: 'Alex Huaracha',
  gender: 'male',
  pronouns: 'he/him',
  flipSentences: [
    'Creating with code. Small details matter.',
    'Design Engineer',
    'Open Source Contributor',
  ],
  address: 'Arequipa City, Perú',
  phoneNumber: '+51 962 334 712',
  email: 'alexhuarachaq@gmail.com',
  website: '----',
  jobTitle: 'Backend Developer',
  about: `
  - A Systems Engineering graduate from National University of San Agustin with a strong interest in **Back-End Development** and **Machine Learning**.
  - Skilled in **Node.js**, **Express**, and **Django** for building robust server-side applications.
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
