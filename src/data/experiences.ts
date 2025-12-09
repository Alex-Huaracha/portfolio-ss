import type { Experience } from '../types/experiences';

export const EXPERIENCES: Experience[] = [
  {
    id: 'fips',
    companyName:
      'Faculty of Systems Engineering, National University of San Agustin',
    companyLogo: '',
    positions: [
      {
        id: 'e3540efe-f085-4d15-937a-e517d2883597',
        title: 'Backend Development Intern',
        employmentPeriod: {
          start: '08.2024',
          end: '05.2024',
        },
        employmentType: 'Internship',
        icon: 'code',
        description: ``,
        skills: [
          'TypeScript',
          'Node.js',
          'React',
          'Agile',
          'Teamwork',
          'Research',
          'Problem-solving',
        ],
        isExpanded: true,
      },
      {
        id: 'd8a37834-9496-438f-b8a6-2a29c9e0a344',
        title: 'Artificial Intelligence Research Assistant',
        employmentPeriod: {
          start: '05.2024',
          end: '09.2024',
        },
        employmentType: 'Internship',
        icon: 'idea',
        description: ``,
        skills: [
          'Python',
          'Machine Learning',
          'Deep Learning',
          'Data Analysis',
          'Teamwork',
          'Research',
          'Problem-solving',
        ],
        // isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: 'education',
    companyName: 'Education',
    positions: [
      {
        id: '01132c4c-ca69-4248-b3cb-83b84a452127',
        title: 'The Odin Project - Full Stack Developer',
        employmentPeriod: {
          start: '08.2025',
          end: '12.2025',
        },
        icon: 'education',
        description: ``,
        skills: [
          'Java',
          'Python',
          'Data Structures',
          'Algorithms',
          'Advanced Databases',
          'Systems Design',
          'Distributed Systems',
          'Software Engineering',
          'Self-learning',
          'Teamwork',
          'Presentation',
        ],
      },
      {
        id: '93d29a27-726b-4b3b-8f9c-c65460d52deb',
        title: 'National University of San Agustin - UNSA',
        employmentPeriod: {
          start: '08.2020',
          end: '07.2025',
        },
        icon: 'education',
        description: ``,
        skills: [
          'Java',
          'Python',
          'Data Structures',
          'Algorithms',
          'Advanced Databases',
          'Systems Design',
          'Distributed Systems',
          'Software Engineering',
          'Self-learning',
          'Teamwork',
          'Presentation',
        ],
      },
    ],
  },
];
