import { Project, Experience, Education, SkillCategory, Certification } from './types';

export const portfolioOwner = {
  name: 'Fairah Almira',
  title: 'AI & Machine Learning Enthusiast | Data Engineer | Software Developer',
  email: 'fairahalmira27@gmail.com',
  github: 'https://github.com/fairahalmira',
  linkedin: 'https://linkedin.com/in/fairahalmira',
  instagram: 'https://instagram.com/fairahalmira',
  location: 'Indonesia',
  aboutBrief: 'Informatics Engineering student passionate about Artificial Intelligence, Machine Learning, Data Engineering, and Software Development. Dedicated to training prediction models and developing smart platforms to bridge modern engineering concepts with real-world impact.',
  aboutFull: 'I am an Informatics Engineering student with a deep fascination for high-impact intelligence architectures, automated pipelines, and full-stack software development. Combining core mathematics, data extraction, and classical/deep machine learning pipelines, I enjoy building tools that solve practical, tangible problems.\n\nThroughout my study, I have participated in exchange programs, specialized AI cohorts, and university structures to hone my leadership, engineering discipline, and collaboration. I approach every challenge with an aggressive growth mindset, high standards of execution, and an obsession with premium, user-friendly digital craft.',
};

export const projects: Project[] = [
  {
    id: 'product-layout-recommendation',
    title: 'Grocery Store Product Layout Recommendation System',
    description: 'An AI-based optimization engine that analyzes customer item co-occurrences using Association Rule Mining to dynamically suggest spatial product placements.',
    longDescription: 'This system is designed to optimize product layout in a physical grocery store by mining transaction histories. By utilizing the Apriori association rule-mining algorithm, it surfaces hidden patterns of co-purchase (e.g. bread & butter). It maps these relations to an interactive retail layout grid to minimize customer shopping fatigue and maximize store cross-selling metrics.',
    role: 'Lead Developer & Data Scientist',
    achievements: [
      'Engineered an Apriori algorithm pipeline in Python that processes sparse transaction logs in under 200ms.',
      'Designed an interactive retail supermarket shelf visualization showing real-time proximity recommendation ratings.',
      'Constructed a clean data flow schema allowing direct CSV upload to analyze and plot network graphs of correlated items.'
    ],
    tech: ['Python', 'Pandas', 'Mlxtend', 'React', 'Tailwind CSS', 'D3.js'],
    image: 'layout',
    category: 'ai'
  },
  {
    id: 'educational-tourism-recommendation',
    title: 'EduSolo: AI-Based Educational Tourism Recommendation System',
    description: 'An intelligent recommendation service that builds tailored educational and historical tours in Solo using demographical weights and dynamic interests.',
    longDescription: 'EduSolo helps students and tourists discover historic, academic, and cultural destinations. Built using an active hybrid collaborative-filtering framework, it processes user age, budget, and learning goals to render custom travel itineraries, with live responsive mapping integrations.',
    role: 'Full-Stack Engineer & AI Developer',
    achievements: [
      'Created and trained the recommendation scoring model optimizing user alignment to historical landmarks.',
      'Architected a highly responsive Inertia.js + Laravel gateway delivering fast sub-100ms client route hydration.',
      'Recognized with the Best Project Award out of dozens of group innovations in the AI Development Cohort.'
    ],
    tech: ['React', 'Laravel', 'Inertia.js', 'Python', 'Tailwind CSS', 'Vercel'],
    link: 'https://edusolo.vercel.app/',
    image: 'tourism',
    category: 'ai'
  },
  {
    id: 'iris-classification',
    title: 'Iris Flower Classification Web Application',
    description: 'A responsive visual workspace and API wrapper that queries a machine learning classification model to categorize Iris species in real-time.',
    longDescription: 'A direct demonstration of ML model serving. Features interactive sliders representing anatomical metrics (petal length, sepal width). The workspace visualizes real-world prediction probabilities in beautifully responsive bar graphs with live SVG updates.',
    role: 'Machine Learning Engineer & API Developer',
    achievements: [
      'Trained a highly precise Scikit-Learn classifier achieving 98% validation accuracy.',
      'Built a stateless Flask API endpoint deployed in a serverless function structure for minimal latency.',
      'Constructed a modern, micro-interactive frontend showcasing instant input, animated feedback, and high-contrast visuals.'
    ],
    tech: ['Python', 'Scikit-Learn', 'Flask', 'React', 'motion', 'Recharts'],
    link: 'https://flask-model-api-teal.vercel.app/',
    image: 'iris',
    category: 'web'
  },
];

export const experiences: Experience[] = [
  {
    id: 'infinite-learning',
    company: 'Infinite Learning',
    role: 'AI Intern / Developer',
    period: 'March 2025 – July 2025',
    tag: 'Artificial Intelligence',
    description: [
      'Completed an intensive Artificial Intelligence Development Cohort with specialized tracks on Neural Networks, Machine Learning, and Computer Vision.',
      'Collaborated on high-fidelity team projects applying algorithmic scoring to resolve complex urban routing and recommendation tasks.',
      'Pioneered interactive UI interfaces utilizing React for machine learning system deployments.'
    ]
  },
  {
    id: 'hmif-kominfo',
    company: 'Informatics Student Association, Institut Teknologi Padang',
    role: 'Member of Information & Communication Division (Kominfo)',
    period: '2024 – Present',
    tag: 'Leadership & Dev',
    description: [
      'Spearheaded internal and public-facing technological campaigns and workshops to promote coding engagement among Informatics students.',
      'Designed branding guidelines, digital communications, and educational tech write-ups reaching thousands of community members.',
      'Co-organized institutional code camps, hackathons, and collaborative engineering initiatives.'
    ]
  },
  {
    id: 'tourism-ambassador',
    company: 'Uni/Uda Sumatera Barat Program',
    role: 'Tourism Ambassador Program Participant',
    period: '2024',
    tag: 'Cultural Ambassador',
    description: [
      'Selected to represent district leadership in regional cultural advocacy, public communication, and heritage tourism programs.',
      'Spearheaded public presentations advocating for smart-city integrations and digital technology adoption in historical preservation.',
      'Developed deep public-speaking, leadership, and crisis-management qualities.'
    ]
  }
];

export const educations: Education[] = [
  {
    id: 'itp',
    institution: 'Institut Teknologi Padang',
    degree: 'Bachelor of Informatics Engineering',
    period: '2022 – Present',
    specialization: 'Artificial Intelligence & Software Engineering focus',
    details: 'Maintaining excellent academic standing. Highly active in core engineering groups, hackathons, and algorithm design workshops.'
  },
  {
    id: 'umn',
    institution: 'Universitas Multimedia Nusantara',
    degree: 'Study Exchange Program',
    period: '2024',
    specialization: 'Probability & Statistics, Data Science tracks',
    details: 'Completed advanced courses in high-dimensional datasets, regression analysis, statistical modeling, and computer systems architecture.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ds',
    title: 'Artificial Intelligence & Data Science',
    skills: [
      { name: 'Machine Learning', level: 'Advanced' },
      { name: 'Deep Learning', level: 'Intermediate' },
      { name: 'Computer Vision', level: 'Intermediate' },
      { name: 'Data Analysis', level: 'Advanced' },
      { name: 'Data Visualization', level: 'Advanced' },
      { name: 'Predictive Analytics', level: 'Advanced' }
    ]
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'HTML & CSS', level: 'Advanced' }
    ]
  },
  {
    id: 'frameworks-tools',
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Laravel', level: 'Advanced' },
      { name: 'Inertia.js', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Google Colab', level: 'Advanced' }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'infinite-cert',
    title: 'Infinite Learning AI Development Program Certificate',
    issuer: 'Infinite Learning & Ministry of Education',
    date: 'July 2025'
  },
  {
    id: 'best-proj-cert',
    title: 'Best Project Award – EduSolo Platform Innovation',
    issuer: 'AI Development Cohort Panelists',
    date: 'June 2025'
  }
];
