import type { Experience } from '../types/experiences';

export const EXPERIENCES: Experience[] = [
  // WORK EXPERIENCES
  {
    id: 'hagemsa',
    companyName: 'Transportes Hagemsa',
    companyLogo:
      'https://transporteshagemsa.com/wp-content/uploads/2022/10/Hagemsa-sin-Fondo.webp',
    positions: [
      {
        id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        title: 'AI Engineer',
        employmentPeriod: {
          start: '11.2025',
        },
        employmentType: 'Full-time',
        icon: 'brain',
        description: `
- Architected a **RAG pipeline** over **pgvector** and exposed it through a custom **MCP server**, letting LLM-powered **LangGraph** agents query enterprise records in context — cutting manual data-retrieval time across ERP workflows by **35%**.
- Designed the core inventory and dynamic resource-allocation modules of a company-wide **ERP** on **PostgreSQL**, containerized with **Docker** and deployed to **AWS** via CI/CD, reducing operations planning overhead by **30%**.
- Built a task-management and time-tracking module with **Redis**-backed real-time workflow monitoring, adopted across **3+ departments** — turning weekly reporting from a days-long process into hours.
`,
        skills: [
          'LLMs',
          'RAG',
          'MCP',
          'LangChain',
          'LangGraph',
          'pgvector',
          'PostgreSQL',
          'Redis',
          'Docker',
          'AWS',
          'CI/CD',
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
        id: 'd8a37834-9496-438f-b8a6-2a29c9e0a344',
        title: 'AI Engineer',
        employmentPeriod: {
          start: '11.2024',
          end: '11.2025',
        },
        employmentType: 'Contract / Research',
        icon: 'brain',
        description: `
- Engineered a spatial-temporal pipeline ingesting raw GPS logs into **MongoDB** and serving curated features from **PostgreSQL**, transforming over **25 million** raw pings into structured, ML-ready datasets for the city's public transit system.
- Trained **LSTM** deep learning architectures to model temporal dependencies in transit patterns, improving anomaly and demand-forecasting accuracy by **40%** over baseline heuristics.
- Benchmarked **XGBoost** against a custom **SpatialConv** neural network under **Pytest**-covered, **Docker**-containerized training pipelines for reproducible runs, raising production-model accuracy by **15%**.
`,
        skills: [
          'Python',
          'TensorFlow',
          'Deep Learning (LSTM)',
          'XGBoost',
          'Pandas',
          'MongoDB',
          'PostgreSQL',
          'Pytest',
          'Docker',
        ],
      },
      {
        id: 'e3540efe-f085-4d15-937a-e517d2883597',
        title: 'Full Stack Developer',
        employmentPeriod: {
          start: '10.2023',
          end: '11.2024',
        },
        employmentType: 'Internship',
        icon: 'code',
        description: `
- Modeled a **PostgreSQL** schema with **Prisma ORM** capturing deep dependencies across specifications and non-functional requirements, digitizing requirements-engineering workflows for **50+ concurrent projects**.
- Automated ingestion of heterogeneous evidence files and dynamic report generation, with data isolation enforced by a multi-tiered **RBAC** layer under **Jest** integration tests, cutting manual deliverable-assembly time by **50%**.
`,
        skills: [
          'TypeScript',
          'Node.js',
          'Express',
          'Prisma ORM',
          'PostgreSQL',
          'RBAC Security',
          'Jest',
        ],
      },
    ],
  },

  {
    id: 'inca-tops',
    companyName: 'Inca Tops',
    positions: [
      {
        id: '5f0c8e2a-3b7d-4c1e-9a6f-2d8b4e7c1a93',
        title: 'Full Stack Developer',
        employmentPeriod: {
          start: '09.2022',
          end: '10.2023',
        },
        icon: 'code',
        description: `
- Developed a supply-chain and inventory system on **MySQL** that replaced a fully paper-based process for tracking financial balances, digitizing wool procurement and payments for **100+ suppliers**.
- Delivered dedicated tracking and quality-control modules covering fiber fineness, staple length, and yield — cutting manual grading errors by **30%** and enabling full origin traceability for thousands of wool batches.
`,
        skills: [
          'MySQL',
          'Full Stack Development',
          'Supply Chain Software',
          'Inventory Management',
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
