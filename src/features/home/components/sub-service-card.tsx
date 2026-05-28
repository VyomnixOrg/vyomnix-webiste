import type { SubService } from "@/common/types";

interface SubServiceCardProps {
  subService: SubService;
}

/**
 * Modular card displaying a sub-service name, description, and list of features.
 * Used inside the ServicesSection explorer.
 */
export function SubServiceCard({ subService }: SubServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/25 hover:shadow-md">
      <h4 className="font-heading text-base font-semibold text-accent">
        {subService.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
        {subService.description}
      </p>
      <ul className="mt-4 space-y-2 border-t border-border/40 pt-4" role="list">
        {subService.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
