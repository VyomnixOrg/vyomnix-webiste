export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "Understanding your goals, requirements, and business context to define a clear project direction.",
  },
  {
    step: 2,
    title: "Planning",
    description: "Building the roadmap, selecting the tech stack, and designing the system architecture.",
  },
  {
    step: 3,
    title: "Design",
    description: "Creating wireframes, prototypes, and polished interface designs centered on user experience.",
  },
  {
    step: 4,
    title: "Development",
    description: "Agile sprint-based development with continuous integration and iterative delivery.",
  },
  {
    step: 5,
    title: "Testing",
    description: "Comprehensive automated and manual testing to ensure quality, security, and reliability.",
  },
  {
    step: 6,
    title: "Deployment",
    description: "CI/CD pipeline launch, go-live execution, and production environment setup.",
  },
  {
    step: 7,
    title: "Growth",
    description: "Ongoing monitoring, updates, optimization, and dedicated support to scale your success.",
  },
];
