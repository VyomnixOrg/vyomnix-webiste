import type { ProcessStep } from "@/common/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description: "Understanding goals, scope, and business requirements to define a clear project direction.",
  },
  {
    step: 2,
    title: "Planning & Architecture",
    description: "Building the roadmap, selecting the tech stack, and designing the system architecture.",
  },
  {
    step: 3,
    title: "UI/UX Design",
    description: "Creating wireframes, prototypes, and polished interface designs centered on user experience.",
  },
  {
    step: 4,
    title: "Development",
    description: "Agile sprint-based development with continuous integration and iterative delivery.",
  },
  {
    step: 5,
    title: "Testing & QA",
    description: "Comprehensive automated and manual testing to ensure quality and reliability.",
  },
  {
    step: 6,
    title: "Deployment",
    description: "CI/CD pipeline launch, go-live execution, and production environment setup.",
  },
  {
    step: 7,
    title: "Support & Maintenance",
    description: "Ongoing monitoring, updates, performance optimization, and dedicated support.",
  },
];
