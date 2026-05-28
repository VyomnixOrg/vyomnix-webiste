import { cn } from "@/common/utils";

interface FormFieldProps extends Omit<React.ComponentProps<"input">, "size"> {
  id: string;
  label: string;
  name: string;
  error?: string;
}

interface FormTextareaProps extends React.ComponentProps<"textarea"> {
  id: string;
  label: string;
  name: string;
  error?: string;
}

const INPUT_CLASSES =
  "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-accent placeholder:text-muted-foreground/45 transition-colors focus:outline-none focus:ring-2";

const LABEL_CLASSES = "mb-1.5 block text-sm font-medium text-accent";

/**
 * Reusable form input field with label and error state handling.
 */
export function FormField({
  id,
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  className,
  error,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className={LABEL_CLASSES}>
        {label}
        {required && <span className="ml-0.5 text-destructive" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          INPUT_CLASSES,
          error
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-border focus:border-primary focus:ring-primary/20"
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

/**
 * Reusable form textarea field with label and error state handling.
 */
export function FormTextarea({
  id,
  label,
  name,
  rows = 5,
  required = false,
  placeholder,
  className,
  error,
  ...props
}: FormTextareaProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className={LABEL_CLASSES}>
        {label}
        {required && <span className="ml-0.5 text-destructive" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={cn(
          INPUT_CLASSES,
          "resize-none",
          error
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-border focus:border-primary focus:ring-primary/20"
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}
