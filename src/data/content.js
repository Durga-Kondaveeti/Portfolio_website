import { image, img } from 'framer-motion/client';
import { Code2, Server, Cloud, Terminal, Database } from 'lucide-react';

export const personalInfo = {
  name: "Durga Kondaveeti",
  role: "Software Development Engineer",
  location: "Fairfax, VA",
  contacts: {
    email: "kondaveetidurga4@gmail.com",
    phone: "+1-(571) 748-3533",
    linkedin: "https://linkedin.com/in/kondaveetidurga",
    github: "https://github.com/Durga-Kondaveeti",
    website: "https://durga-portfolio.com"
  }
};

export const aboutPersonas = {
  recruiter: "Master's student in Computer Engineering at GMU (Exp. May 2026) with professional experience as an SDE at Paytm. Tech stack includes React, Python, Node.js, and AWS. Proven track record of optimizing web performance (reducing load times by ~45%) and designing CI/CD pipelines.",
  manager: "I focus on reliability and scalability. At Paytm, I didn't just write code; I architected reusable component libraries and established Jest testing protocols that reduced regression bugs by 25%. I'm experienced in migrating legacy services to AWS and optimizing backend logic for O(n) performance.",
  client: "I build fast, intuitive digital products. I specialize in turning complex data—like Regex patterns or financial transactions—into user-friendly interfaces. My goal is to deliver software that works seamlessly, loads instantly, and solves real user problems."
};

export const experience = [
  {
    role: "Graduate Teaching Assistant",
    company: "George Mason University",
    date: "Jan 2025 - Present",
    desc: "Mentoring 200+ students on Cloud & AI Infra (AWS, Azure, Docker). Published 30+ technical resources for system design."
  },
  {
    role: "Software Development Engineer",
    company: "Paytm",
    date: "Aug 2023 - Aug 2024",
    desc: "Optimized React apps reducing load time to 1.6s. Built CI/CD pipelines and migrated services to AWS."
  },
  {
    role: "Software Engineering Intern",
    company: "AICTE - Jio",
    date: "Jan 2023 - June 2023",
    desc: "Built automated support ticket classification (95% accuracy) and backend forecasting services."
  }
];

export const education = [
  {
    school: "George Mason University",
    degree: "M.S. in Computer Engineering",
    date: "2024 - 2026",
    location: "Fairfax, VA"
  },
  {
    school: "Koneru Lakshmaiah University",
    degree: "B.Tech in Computer Science",
    date: "2020 - 2024",
    location: "Vijayawada, India"
  }
];

export const skills = [
  { category: "Languages", items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React", "React Native", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Django", "Spring Boot", "GraphQL"] },
  { category: "Cloud/DevOps", items: ["AWS (Lambda, EC2)", "Docker", "Kubernetes", "Terraform", "Jenkins"] }
];

export const projects = [
  {
    title: "Regex Backtracking Visualizer",
    img: "../public/images/Regex_project.png",
    tech: ["React", "TypeScript", "AST Parsing"],
    desc: "Custom engine to visualize recursive backtracking and greedy matching in real-time.",
    link: "https://durga-kondaveeti.github.io/Regex-Time-Travel-Debugger/",
    type: "Web App"
  },
  {
    title: "NLU Code Explainer LLM",
    img: "../public/images/code_explainator.png",
    tech: ["Python", "Llama 2", "QLORA"],
    desc: "Fine-tuned LLM to generate human-readable code explanations with 20% higher accuracy.",
    link: "https://github.com/Durga-Kondaveeti",
    type: "AI/ML"
  },
  {
    title: "CLIP-based Image Understanding",
    img: "../public/images/CLIP_image_sort.png",
    tech: ["PyTorch", "ViT-B/32", "Mask R-CNN"],
    desc: "Implemented text-to-image retrieval and zero-shot classification.",
    link: "https://github.com/Durga-Kondaveeti",
    type: "Computer Vision"
  }
];