import type { Service } from "@/common/types";

export const SERVICES: Service[] = [
  {
    icon: "code",
    title: "Software & Cloud Services",
    description:
      "End-to-end software development, cloud infrastructure, SaaS platforms, and AI-powered digital solutions for modern enterprises.",
    tags: [
      "Custom Software",
      "Web & Mobile Apps",
      "Cloud Infrastructure",
      "ERP / CRM / POS",
      "API Integration",
      "SaaS & AI Solutions",
    ],
    subServices: [
      {
        title: "Custom Software Development",
        description: "Tailored software solutions built to your exact specifications.",
        features: ["Requirements-driven architecture", "Agile delivery methodology", "Scalable and maintainable codebase", "Cross-platform compatibility"],
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: ["Flutter & React Native", "Performance-optimized", "Offline capability", "App Store deployment"],
      },
      {
        title: "Website Development",
        description: "Professional websites and web applications built for performance.",
        features: ["Responsive & accessible", "SEO-optimized", "CMS integration", "Fast loading & secure"],
      },
      {
        title: "ERP & CRM Solutions",
        description: "Enterprise resource planning and customer relationship management.",
        features: ["Modular architecture", "Role-based access", "Real-time reporting", "Third-party integrations"],
      },
      {
        title: "Cloud Infrastructure & Hosting",
        description: "Reliable cloud infrastructure, server management, and hosting.",
        features: ["AWS / GCP / Azure", "Auto-scaling setup", "99.9% uptime SLA", "Security hardened"],
      },
      {
        title: "AI-powered Business Solutions",
        description: "Intelligent automation and AI tools embedded in your workflow.",
        features: ["Chatbots & assistants", "Predictive analytics", "Document processing", "ML model integration"],
      },
    ],
  },
  {
    icon: "cpu",
    title: "Hardware & Smart Systems",
    description:
      "Smart devices, IoT automation, security and monitoring, networking, and intelligent office infrastructure setup.",
    tags: [
      "Smart POS Devices",
      "IoT & Automation",
      "CCTV & Monitoring",
      "Attendance & Access",
      "Networking Setup",
      "Smart Business Devices",
    ],
    subServices: [
      {
        title: "Smart POS Devices",
        description: "Modern point-of-sale hardware including touchscreen terminals, receipt printers, and scanners.",
        features: ["All-in-one POS terminals", "Wireless peripherals", "Cloud-connected", "Durable enterprise-grade build"],
      },
      {
        title: "IoT & Smart Automation",
        description: "Internet of Things solutions that automate processes and enable smart control of environments.",
        features: ["Sensor networks", "Remote monitoring", "Automated workflows", "Dashboard control panels"],
      },
      {
        title: "CCTV & Monitoring Systems",
        description: "Comprehensive video surveillance and monitoring solutions for offices and retail spaces.",
        features: ["HD & 4K cameras", "Remote viewing", "Motion detection & alerts", "Cloud storage options"],
      },
      {
        title: "Attendance & Access Systems",
        description: "Biometric and card-based attendance tracking and access control.",
        features: ["Fingerprint & face recognition", "RFID card access", "Payroll integration", "Audit logs"],
      },
    ],
  },
  {
    icon: "megaphone",
    title: "Business & Digital Services",
    description:
      "Design, branding, marketing, and strategic IT consultation to strengthen your digital presence and business identity.",
    tags: [
      "UI/UX Design",
      "Branding & Identity",
      "Digital Marketing",
      "E-commerce Solutions",
      "Technical Consultation",
      "Maintenance & Support",
    ],
    subServices: [
      {
        title: "UI/UX Design",
        description: "Human-centered interface and experience design for web, mobile, and software.",
        features: ["User research & personas", "Wireframes & prototypes", "Design systems", "Usability testing"],
      },
      {
        title: "Branding & Digital Identity",
        description: "Comprehensive branding services from logo design to full visual identity guidelines.",
        features: ["Logo & wordmark design", "Brand guidelines", "Marketing collateral", "Digital asset kits"],
      },
      {
        title: "Digital Marketing Services",
        description: "Data-driven marketing strategies across digital channels to grow your audience.",
        features: ["SEO & SEM campaigns", "Social media management", "Content strategy", "Analytics & reporting"],
      },
      {
        title: "E-commerce Solutions",
        description: "Full-featured online stores integrated with payments and logistics.",
        features: ["Custom storefront design", "Payment gateway setup", "Inventory management", "Mobile-optimized"],
      },
    ],
  },
];
