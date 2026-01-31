import type { Experience } from '../types/experiences';

export const EXPERIENCES: Experience[] = [
  // WORK EXPERIENCES
  {
    id: 'hagemsa',
    companyName: 'Hagemsa',
    companyLogo:
      'https://transporteshagemsa.com/wp-content/uploads/2022/10/Hagemsa-sin-Fondo.webp',
    positions: [
      {
        id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        title: 'Full Stack Developer',
        employmentPeriod: {
          start: '01.2026',
        },
        employmentType: 'Full-time',
        icon: 'code',
        description: `
- Leading the **migration of legacy systems** to modern architecture, ensuring business continuity while modernizing the technology stack.
- Developing comprehensive **cash management system modules** including expense tracking, income processing, settlements, travel allowances, and manifests for heavy cargo transportation operations.
- Architecting **full-stack solutions** using **React** and **Hono.js** to optimize financial and logistics workflows across multiple business units.
- Implementing **cloud-based infrastructure** with **Firebase** and **Google Cloud Platform** to enhance scalability and system reliability.
- Managing **MySQL databases** to handle complex transactional data for transportation and logistics operations across Latin America.
- Collaborating with cross-functional teams to deliver robust solutions that improve operational efficiency in the heavy cargo transportation industry.
`,
        skills: [
          'React',
          'Hono.js',
          'MySQL',
          'Firebase',
          'Google Cloud Platform',
          'Full Stack Development',
          'System Migration',
          'Financial Systems',
          'Logistics Software',
          'Git',
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: 'fips',
    companyName: 'National University of San Agustin',
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Escudo_UNSA.png',
    positions: [
      {
        id: 'e3540efe-f085-4d15-937a-e517d2883597',
        title: 'Backend Development Intern',
        employmentPeriod: {
          start: '08.2024',
          end: '07.2025',
        },
        employmentType: 'Internship',
        icon: 'code',
        description: `
- Engineered the backend for a **Requirements Engineering Automation Platform**, streamlining the entire software specification lifecycle (elicitation to delivery).
- Architected a type-safe **REST API** using **Node.js**, **Express**, and **TypeScript**, ensuring code reliability and maintainability.
- Designed complex database schemas with **Prisma ORM** and **PostgreSQL** to manage multi-tenant Organizations, Projects, and Artifacts.
- Implemented **Role-Based Access Control (RBAC)** and secure authentication (JWT) to manage permissions for Stakeholders and Admins.
- Developed an automated reporting engine using **PDFKit** and **ExcelJS** to generate dynamic specification documents and acceptance records.
`,
        skills: [
          'TypeScript',
          'Node.js',
          'Express',
          'Prisma ORM',
          'PostgreSQL',
          'System Design',
          'RBAC Security',
          'PDF Generation',
        ],
        isExpanded: true,
      },
      {
        id: 'd8a37834-9496-438f-b8a6-2a29c9e0a344',
        title: 'AI Research Assistant',
        employmentPeriod: {
          start: '05.2025',
        },
        employmentType: 'Contract / Research',
        icon: 'brain',
        description: `
**Project: SMARQ (Smart Mobility Arequipa) - Gov. Funded**

- Collaborated on developing AI solutions for the Integrated Transport System (SIT).
- Engineered a **Deep Learning** framework using **LSTM Autoencoders** to detect anomalies in real-time, processing over **32 million GPS records**.
- Authored the technical paper *"Multi-Unit Unified GPS Framework"* (currently under internal review), documenting a novel Multi-Unit processing approach.
- Achieved a **53.7% improvement** in detection accuracy compared to traditional statistical baselines by implementing a global consensus algorithm.
- Utilized **Python**, **TensorFlow**, and **Pandas** to build the data pipeline, optimizing the model for scalability on standard hardware.
`,
        skills: [
          'Python',
          'TensorFlow',
          'Deep Learning (LSTM)',
          'Big Data Processing',
          'Research & Development',
          'Anomaly Detection',
          'Pandas/NumPy',
          'Git',
        ],
        // isExpanded: true,
      },
    ],
  },

  // FREELANCE PROJECTS
  {
    id: 'freelance',
    companyName: 'Freelance ',
    positions: [
      {
        id: '',
        title: 'Backend Developer',
        employmentPeriod: {
          start: '07.2025',
          end: '11.2025',
        },
        employmentType: 'Part-time',
        icon: 'code',
        description: `
Architected and developed a scalable **Microservices E-commerce Platform** using **Node.js** and **Docker**.

* **System Design:** Orchestrated isolated services (Auth, Product, Order) through a unified **API Gateway** pattern.
* **Event-Driven Architecture:** Implemented asynchronous communication and background jobs using **Redis** and **Bull Queues** for high-performance notification handling.
* **Data & Security:** Managed persistent data with **PostgreSQL** and **Prisma ORM**, securing endpoints with **JWT** (access/refresh tokens) and Role-Based Access Control (RBAC).
* **Infrastructure:** Containerized the entire ecosystem with **Docker Compose** for consistent deployment environments.`,
        skills: [
          'Microservices',
          'Node.js',
          'Docker',
          'Redis',
          'PostgreSQL',
          'Event-Driven Architecture',
          'System Design',
          'Prisma',
          'API Gateway',
        ],
      },
    ],
  },

  // EDUCATION
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
        description: `
- Completed a rigorous **Full Stack JavaScript** curriculum (+1000 hours), building complex applications from scratch without tutorials.
- Developed a **Social Network (Odin-Book)** with features like real-time feeds, friendship management, and secure authentication (PassportJS/JWT).
- Designed and deployed scalable **RESTful APIs** using **Node.js** and **Express**, integrating with databases like MongoDB/PostgreSQL.
- Mastered the component lifecycle in **React**, managing complex state and side effects to create responsive user interfaces.
- Implemented **Testing Driven Development (TDD)** using Jest/Vitest to ensure code reliability and minimize bugs.
`,
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'React',
          'Node.js',
          'Express.js',
          'MongoDB',
          'REST APIs',
          'Authentication (JWT)',
          'Jest',
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
        description: `- Graduate of the Specialized Systems Engineering Program.
- Specialized in **Mobile Development** and **Advanced Databases**, designing scalable architectures and optimizing complex queries.
- Strong foundation in **Data Structures & Algorithms** and **Software Architecture**, focusing on efficiency and clean code principles.
- Managed the full software lifecycle during **Software Engineering Projects**.
- Applied **Software Quality** and **Testing** methodologies to ensure robust and maintainable application standards.
`,
        skills: [
          'Java',
          'Python',
          'Data Structures',
          'Algorithms',
          'Advanced Databases',
          'Web Development',
          'Mobile Development',
          'Systems Design',
          'Software Engineering',
          'Software Architecture',
          'Artificial Intelligence',
          'Distributed Systems',
          'Self-learning',
          'Teamwork',
          'Presentation',
        ],
      },
    ],
  },
];
