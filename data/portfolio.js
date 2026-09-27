export const featuredProjects = [
  {
    title: 'Galilei',
    category: 'LLMOps platform',
    year: '2025',
    description:
      'Product owner and technical lead for an end-to-end platform that helped bring more than 20 AI use cases into production at Telkomsel.',
    detail:
      'Led five engineers and two QA specialists building an agentic AI platform with a disciplined path from experimentation to production.',
    image: 'galilei'
  },
  {
    title: 'Public Perception AI',
    category: 'Bank Indonesia',
    year: '2025',
    description:
      'Led a six-person engineering team building an AI platform to understand public responses to policy through daily news analysis.',
    detail:
      'The platform organizes news by category, intent, and sentiment to make changes in public perception easier to study.',
    image: 'governance'
  },
  {
    title: 'Ecoflow',
    category: 'AI travel assistant',
    year: '2024',
    description:
      'Designed crowd-density prediction, destination recommendations, and a conversational assistant for Telkomsel’s travel app.',
    detail:
      'The system uses travel time and geographic distance to suggest alternatives when destinations become crowded.',
    image: 'ecoflow'
  }
];

export const moreProjects = [
  {
    title: 'Few-shot learning in Indonesian',
    year: '2022',
    description:
      'Master’s thesis on Indonesian text classification with limited labeled data, benchmarked on IndoNLU.'
  },
  {
    title: 'PA-GPT Personal Assistant',
    year: '2022',
    description:
      'A web-based AI companion combining search, calculation, paper summaries, coding, and a personal question-answering feature.',
    url: 'https://portfolio-web-249407.web.app/chatbot'
  },
  {
    title: 'Citation Intent & Sentiment Analysis',
    year: '2021',
    description:
      'Bachelor’s thesis classifying citation intent and sentiment in the CORD-19 research corpus.'
  },
  {
    title: 'Argus',
    year: '2019',
    description:
      'A social network analysis web app mapping relationships and sentiment in Twitter conversations.'
  },
  {
    title: 'Therwell',
    year: '2019',
    description:
      'A Python desktop tool for estimating well properties at different depths.'
  }
];

export const experience = [
  {
    role: 'AI & Data Governance Center of Excellence Officer',
    company: 'Telkomsel',
    period: 'Dec 2025 – Present',
    summary: 'Setting the standards and delivery gates for responsible AI across the company.',
    highlights: [
      'Lead governance policies, risk classification, documentation, and approvals for production AI releases.',
      'Draft an AI risk and governance framework referencing NIST AI RMF, the EU AI Act, and Indonesian regulation.',
      'Govern a company-wide registry covering more than 200 AI initiatives, including ownership, performance, and business value.',
      'Standardize AI performance monitoring and oversee vendor evidence, delivery timelines, and engineering practices.'
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Telkomsel',
    period: 'Jul 2023 – Nov 2025',
    summary: 'Led GenAI use cases and helped build internal MLOps and LLMOps capabilities.',
    highlights: [
      'Technical lead for a competitor-pricing analysis system, a financial root-cause chatbot, a smart data catalog, and a branch-to-national issue summarizer.',
      'Helped develop an in-house model lifecycle platform using Elyra, Kubernetes, and FastAPI.',
      'Built more resilient Indonesian ID-card OCR for tilted, skewed, and rotated images using PaddleOCR, Python, and TensorFlow.',
      'Coordinated vendor teams on code quality and delivery.'
    ]
  },
  {
    role: 'Data Scientist',
    company: 'JobKred',
    period: 'Aug 2021 – Jul 2023',
    summary: 'Applied language models and data engineering to labour-market intelligence.',
    highlights: [
      'Researched machine learning solutions using language models including GPT-2 and BERT.',
      'Built and maintained a job-ad crawler to identify emerging market skills.',
      'Maintained Python and JavaScript CI pipelines using Pytest, Playwright, Artillery, and GitHub Actions.'
    ]
  },
  {
    role: 'Fullstack Software Engineer, part-time',
    company: 'JobKred',
    period: 'Aug 2021 – May 2022',
    summary: 'Developed internal data annotation and interpretation applications.',
    highlights: [
      'Built data engineering applications and maintained a job-ad crawler.',
      'Worked with Airflow, Django, Scrapy, Docker, Kubernetes, GCP, BigQuery, and Pub/Sub.'
    ]
  },
  {
    role: 'Lead Chatbot Developer, part-time',
    company: 'Chatbiz',
    period: 'Feb 2021 – Jun 2021',
    summary: 'Built WhatsApp chatbots for business use cases.',
    highlights: [
      'Developed serverless chatbot services with Node.js, AWS Lambda, Step Functions, and DynamoDB.',
      'Integrated Twilio, Wit.ai, Dialogflow, and Rasa; automated intent training with Go.'
    ]
  },
  {
    role: 'Backend Developer, part-time',
    company: 'Xtremax',
    period: 'Feb 2020 – Nov 2020',
    summary: 'Developed and maintained ASP.NET MVC and Sitecore applications.',
    highlights: [
      'Built an event-based module for Sitecore Content Editor.',
      'Worked with C#, Docker, Bitbucket, and Microsoft SQL Server.'
    ]
  },
  {
    role: 'Backend Engineer Intern',
    company: 'Roketin',
    period: 'May 2019 – Jul 2019',
    summary: 'Built server-side APIs for an insurance application.',
    highlights: [
      'Refactored a transaction microservice into a new REST API structure, improving request handling speed by 20%.',
      'Worked with Go, MongoDB, Go-Chi, Docker, and GitLab.'
    ]
  }
];

export const recognition = [
  {
    name: 'TM Forum Excellence Award',
    context: 'Excellence in People, Profit & Planet · Winner',
    year: '2026',
    contribution: 'Core AI model for Telkomsel’s Early Warning System.'
  },
  {
    name: 'IDC Future Enterprise Awards',
    context: 'Best in Artificial and Generative Intelligence',
    year: '2025',
    contribution: 'Galilei Generative AI and LLM End-to-End Integrated System.'
  },
  {
    name: 'Global Telecom Awards',
    context: 'Automation Initiative of the Year · Finalist',
    year: '2024',
    contribution: 'AI-Powered Competitor Insight Engine (ACE) Probing Machine.'
  }
];

export const education = [
  {
    degree: 'Master’s degree in Artificial Intelligence',
    school: 'Institut Teknologi Bandung',
    period: 'Aug 2021 – Sep 2022',
    detail: 'GPA 3.81/4.00, cum laude. Fast-track bachelor’s to master’s program.',
    thesis: 'Few-shot Learning in Indonesian Language Text Classification.'
  },
  {
    degree: 'Bachelor’s degree in Informatics',
    school: 'Institut Teknologi Bandung',
    period: 'Jul 2017 – Jul 2021',
    detail: 'GPA 3.65/4.00, cum laude.',
    thesis: 'Citation intent and sentiment classification on a COVID-19 dataset.'
  }
];

export const skills = [
  {
    label: 'Languages',
    items: 'Python, Go, C#, JavaScript, C++, Java'
  },
  {
    label: 'AI & machine learning',
    items: 'PyTorch, TensorFlow, Keras, NLP, LLMOps, computer vision'
  },
  {
    label: 'Platforms & engineering',
    items: 'Kubernetes, Docker, Airflow, AWS, GCP, REST APIs, Django, Node.js'
  },
  {
    label: 'Communication',
    items: 'Business-level spoken and written English'
  }
];

export const leadership = [
  'AI mentor at Telkomsel Learning Center',
  'Industry & Academic Division, ITB Informatics Alumni Association',
  'Head of Kinship Division, HMIF ITB (2020)',
  'Vice Head of Kinship Division, Genshiken ITB (2019)',
  'Vice Head of Musical Division, Genshiken ITB (2018)'
];
