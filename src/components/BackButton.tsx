import Link from "next/link";
import type { ComponentProps } from "react";

type BackButtonProps = ComponentProps<typeof Link>;

export function BackButton({
  children = "Back",
  className = "",
  ...props
}: BackButtonProps) {
  return (
    <Link
      className={`btn btn-secondary btn-sm d-inline-flex align-items-center justify-content-center gap-1 ${className}`.trim()}
      {...props}
    >
      <i className="ph ph-arrow-left" aria-hidden="true" />
      {children}
    </Link>
  );
}
