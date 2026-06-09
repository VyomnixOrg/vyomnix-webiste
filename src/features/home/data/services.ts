export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  featured: {
    title: string;
    description: string;
    visual: string;
  };
  items: ServiceItem[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "software",
    label: "Software",
    featured: {
      title: "Custom Software Development",
      description: "Build scalable applications tailored to your business requirements — from web platforms to enterprise systems.",
      visual: "code",
    },
    items: [
      {
        icon: "code",
        title: "Web Applications",
        description: "High-performance web platforms built with modern frameworks.",
        features: ["React & Next.js", "API-first architecture", "Responsive & accessible"],
      },
      {
        icon: "smartphone",
        title: "Mobile Apps",
        description: "Native and cross-platform apps for iOS and Android.",
        features: ["Flutter & React Native", "Offline capability", "App Store deployment"],
      },
      {
        icon: "layout-dashboard",
        title: "ERP & CRM Systems",
        description: "Enterprise platforms that streamline operations and data.",
        features: ["Modular architecture", "Role-based access", "Real-time reporting"],
      },
      {
        icon: "shopping-cart",
        title: "E-commerce Solutions",
        description: "Full-featured online stores with payments and logistics.",
        features: ["Custom storefronts", "Payment integration", "Inventory management"],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    featured: {
      title: "Cloud Infrastructure & DevOps",
      description: "Reliable, scalable cloud infrastructure with automated deployment pipelines and 99.9% uptime SLA.",
      visual: "cloud",
    },
    items: [
      {
        icon: "server",
        title: "Cloud Migration",
        description: "Seamless migration of existing systems to cloud infrastructure.",
        features: ["AWS / GCP / Azure", "Zero-downtime migration", "Cost optimization"],
      },
      {
        icon: "container",
        title: "DevOps & CI/CD",
        description: "Automated build, test, and deployment pipelines.",
        features: ["Docker & Kubernetes", "GitHub Actions", "Infrastructure as Code"],
      },
      {
        icon: "shield",
        title: "Security & Compliance",
        description: "Enterprise-grade security hardening and compliance auditing.",
        features: ["Security assessments", "Encryption at rest/transit", "Compliance docs"],
      },
      {
        icon: "activity",
        title: "Monitoring & Observability",
        description: "Real-time monitoring, logging, and alerting for production systems.",
        features: ["Grafana dashboards", "Incident response", "SLA tracking"],
      },
    ],
  },
  {
    id: "ai",
    label: "AI",
    featured: {
      title: "AI-Powered Business Solutions",
      description: "Intelligent automation and AI tools embedded into your workflow — from chatbots to predictive analytics.",
      visual: "cpu",
    },
    items: [
      {
        icon: "bot",
        title: "Chatbots & Assistants",
        description: "Custom conversational AI for customer support and operations.",
        features: ["LLM integration", "Multi-language", "Knowledge base RAG"],
      },
      {
        icon: "bar-chart-3",
        title: "Predictive Analytics",
        description: "Data-driven forecasting for smarter business decisions.",
        features: ["ML model training", "Real-time predictions", "Dashboard integration"],
      },
      {
        icon: "file-text",
        title: "Document Processing",
        description: "Automated extraction and processing of documents and forms.",
        features: ["OCR & NLP", "Invoice processing", "Data extraction"],
      },
      {
        icon: "brain",
        title: "AI Consulting",
        description: "Strategic guidance on AI adoption and implementation roadmap.",
        features: ["Feasibility studies", "Proof of concepts", "Model deployment"],
      },
    ],
  },
  {
    id: "business",
    label: "Business Solutions",
    featured: {
      title: "Digital Business Solutions",
      description: "End-to-end digital products and services that strengthen your brand and operational efficiency.",
      visual: "briefcase",
    },
    items: [
      {
        icon: "palette",
        title: "UI/UX Design",
        description: "Human-centered design for web, mobile, and software products.",
        features: ["User research", "Prototyping", "Design systems"],
      },
      {
        icon: "smartphone",
        title: "Smart POS & Hardware",
        description: "Modern point-of-sale systems and smart business devices.",
        features: ["Touchscreen terminals", "Cloud-connected", "Inventory sync"],
      },
      {
        icon: "wifi",
        title: "IoT & Automation",
        description: "Connected devices and automated workflows for smart operations.",
        features: ["Sensor networks", "Remote monitoring", "Dashboard control"],
      },
      {
        icon: "megaphone",
        title: "Digital Marketing",
        description: "Data-driven marketing strategies across digital channels.",
        features: ["SEO & SEM", "Social media", "Analytics & reporting"],
      },
    ],
  },
];
