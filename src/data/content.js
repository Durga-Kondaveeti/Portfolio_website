import { image, img } from 'framer-motion/client';
import { Code2, Server, Cloud, Terminal, Database } from 'lucide-react';

export const personalInfo = {
  name: "Durga Kondaveeti",
  role: "Software Development Engineer",
  location: "Fairfax, VA",
  contacts: {
    email: "durga.k.developer@gmail.com",
    phone: "+1(305)-807-6502",
    linkedin: "https://linkedin.com/in/kondaveetidurga",
    github: "https://github.com/Durga-Kondaveeti",
    website: "https://durga-portfolio.com"
  }
};


export const aboutPersonas = {
  recruiter: "Master's student in Computer Science at GMU (Exp. May 2026) with professional experience as a Full Stack Developer at SDM Industries. Expertise in building high-performance C++ engines and fine-tuning LLMs (Llama 3) for enterprise analytics. Proven track record of achieving 99.99% uptime on AWS infrastructure.",
  manager: "I focus on system reliability and ROI. At SDM Industries, I architected distributed systems managing 10k+ SKUs and 3000+ enterprise customers. I specialize in optimizing database latency (PostgreSQL/SQLite) and deploying scalable AI solutions that drive million-dollar business decisions.",
  client: "I build fast, intelligent digital products. Whether it's a serverless Job Tracker integrated with Gemini 2.5 or a Regex engine visualizer, I translate complex technical problems into seamless user experiences. My goal is to deliver performant, cloud-native software that scales with your needs."
};

export const experience = [
  {
    role: "Graduate Teaching Assistant",
    company: "George Mason University",
    date: "May 2025 - Present",
    desc: "Mentoring 200+ students on Cloud & AI Infra (AWS, Azure, GCP). Published 31 technical resources on System Design, Kubernetes, and Distributed Systems. Conducting weekly labs on AWS BigQuery and Azure OpenAI."
  },
  {
    role: "Full Stack Software Developer",
    company: "SDM Industries",
    date: "Aug 2023 - Aug 2024",
    desc: "Architected distributed CRM/ERP systems achieving 99.99% uptime. Engineered high-performance C++ engines with sub-200ms latency. Developed Sales Analytics tools using fine-tuned Llama 3 models, driving $1M in business decisions."
  },
  {
    role: "Software Engineering Intern",
    company: "AICTE",
    date: "Jan 2023 - June 2023",
    desc: "Built an automated ticket classification system with 95% accuracy using Scikit-learn. Optimized API response times by 65% for a SARIMA-based forecasting microservice by refactoring Node.js XML parsing logic."
  }
];

export const education = [
  {
    school: "George Mason University",
    degree: "M.S. in Computer Science",
    date: "2024 - 2026",
    location: "Fairfax, VA"
  },
  {
    school: "KL University",
    degree: "B.Tech in Computer Science and Engineering",
    date: "2020 - 2024",
    location: "Vijayawada, India"
  }
];

export const skills = [
  { category: "Languages", items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frameworks", items: ["React", "React Native", "Node.js", "Django", "Spring Boot", "GraphQL"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Kafka"] },
  { category: "Certifications", items: ["AWS Developer", "Oracle Cloud Infra", "Red Hat Enterprise", "Azure AZ-900"] }
];

export const projects = [
    {
    title: "AI-Native Serverless Job Tracker",
    img: "images/Job_tracker_Logo.png",
    tech: ["Go", "GCP", "Gemini 2.5", "React", "TailwindCSS"],
    desc: "Built a cloud-native SaaS product using Go microservices and Pub/Sub, integrating Gemini 2.5 to parse unstructured data and sync real-time application status to a React dashboard.",
    link: "https://github.com/Durga-Kondaveeti/Job-tracker",
    type: "SaaS",
    isLogo: true
  },
  {
    title: "Regex Backtracking Visualizer",
    img: "images/Regex_project.png",
    tech: ["HTML", "CSS", "React", "TypeScript", "AST Parsing"],
    desc: "Developed a React/TypeScript visualizer that exposes regex engine internals, rendering step-by-step recursive backtracking and AST parsing to demonstrate pattern matching execution.",
    link: "https://github.com/Durga-Kondaveeti/Regex-Time-Travel-Debugger",
    demo: "https://durga-kondaveeti.github.io/Regex-Time-Travel-Debugger/",
    type: "Web App"
  },
  {
    title: "NLU Code Explainer LLM",
    img: "images/code_explainator.png",
    tech: ["Python", "Llama 2", "QLORA", "PEFT"],
    desc: "Fine-tuned Llama 2 using QLoRA and AST-based feature extraction to generate human-readable code explanations, improving semantic accuracy by 20% over base benchmarks.",
    link: "https://github.com/Durga-Kondaveeti",
    type: "AI/ML"
  },
  {
    title: "CLIP-based AI Image Understanding",
    img: "images/CLIP_Image_sort.png",
    tech: ["PyTorch", "ViT-B/32", "Mask R-CNN"],
    desc: "Implemented text-to-image retrieval and zero-shot classification utilizing cosine ranking and OOD abstention mechanisms, achieving Recall@1=0.91 on CIFAR-10.",
    link: "https://github.com/Durga-Kondaveeti",
    type: "Computer Vision"
  }
];