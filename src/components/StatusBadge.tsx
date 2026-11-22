type StatusBadgeProps =
  | { status: string | null; label?: string | null }
  | { status?: string | null; label: string | null };

const STATUS_CLASSES: Record<string, string> = {
  // Success
  active: "bg-success-subtle text-success",
  approved: "bg-success-subtle text-success",
  completed: "bg-success-subtle text-success",
  done: "bg-success-subtle text-success",
  acknowledged: "bg-success-subtle text-success-emphasis",
  confirmed: "bg-success-subtle text-success-emphasis",
  finished: "bg-success-subtle text-success-emphasis",
  sufficient: "bg-success-subtle text-success-emphasis",
  reserved: "bg-success-subtle text-success-emphasis",
  paid: "bg-success-subtle text-success-emphasis",
  posted: "bg-success-subtle text-success-emphasis",
  configured: "bg-success-subtle text-success-emphasis",
  read: "bg-success-subtle text-success",
  processed: "bg-success-subtle text-success",
  arrived: "bg-success-subtle text-success",
  received: "bg-success-subtle text-success",

  "partially received": "bg-success-subtle text-success",
  "fully received": "bg-success-subtle text-success-emphasis",

  // Secondary
  inactive: "bg-secondary-subtle text-secondary",
  expired: "bg-secondary-subtle text-secondary",
  "draft ppic": "bg-secondary-subtle text-secondary",
  "draft purchasing": "bg-secondary-subtle text-secondary",
  unprocessed: "bg-secondary-subtle text-secondary-emphasis",
  "not started": "bg-secondary-subtle text-secondary-emphasis",
  "not applicable": "bg-secondary-subtle text-secondary-emphasis",
  unavailable: "bg-secondary-subtle text-secondary-emphasis",

  // Danger
  locked: "bg-danger-subtle text-danger",
  rejected: "bg-danger-subtle text-danger",
  delayed: "bg-danger-subtle text-danger",
  overdue: "bg-danger-subtle text-danger",
  "documents rejected": "bg-danger-subtle text-danger",
  canceled: "bg-danger-subtle text-danger",
  cancelled: "bg-danger-subtle text-danger",
  declined: "bg-danger-subtle text-danger",
  shortage: "bg-danger-subtle text-danger-emphasis",
  insufficient: "bg-danger-subtle text-danger-emphasis",
  "not paid": "bg-danger-subtle text-danger-emphasis",

  // Warning
  pending: "bg-warning-subtle text-warning-emphasis",
  "not configured": "bg-warning-subtle text-warning-emphasis",
  "waiting for confirmation": "bg-warning-subtle text-warning-emphasis",
  "waiting receipt": "bg-warning-subtle text-warning-emphasis",
  "partially available": "bg-warning-subtle text-warning-emphasis",
  "in payment": "bg-warning-subtle text-warning-emphasis",
  "partially paid": "bg-warning-subtle text-warning-emphasis",
  paused: "bg-warning-subtle text-warning-emphasis",
  draft: "bg-warning-subtle text-warning-emphasis",
  "documents need approval": "bg-warning-subtle text-warning-emphasis",
  "waiting for agreement": "bg-warning-subtle text-warning-emphasis",
  "waiting for approval manager": "bg-warning-subtle text-warning-emphasis",
  "waiting for ceo approval": "bg-warning-subtle text-warning-emphasis",
  "waiting for manager approval": "bg-warning-subtle text-warning-emphasis",
  "waiting for procurement review": "bg-warning-subtle text-warning-emphasis",
  "waiting logistic": "bg-warning-subtle text-warning-emphasis",
  "waiting for qc check": "bg-warning-subtle text-warning-emphasis",
  "waiting for measure": "bg-warning-subtle text-warning-emphasis",
  "need approval": "bg-warning-subtle text-warning-emphasis",
  "waiting for ppic to process": "bg-warning-subtle text-warning-emphasis",
  "waiting for applicant to receive": "bg-warning-subtle text-warning-emphasis",

  // Info
  "waiting for approval": "bg-info-subtle text-info-emphasis",
  "internal review procurement": "bg-info-subtle text-info-emphasis",
  "in process": "bg-info-subtle text-info-emphasis",
  running: "bg-info-subtle text-info-emphasis",
  converted: "bg-info-subtle text-info-emphasis",
  "proforma invoice": "bg-info-subtle text-info-emphasis",
  partial: "bg-info-subtle text-info-emphasis",
  "partially arrived": "bg-info-subtle text-info-emphasis",
  "partially ordered": "bg-info-subtle text-info-emphasis",
  "waiting for receipt": "bg-info-subtle text-info-emphasis",
  "waiting documents": "bg-info-subtle text-info-emphasis",
  submitted: "bg-info-subtle text-info-emphasis",
  unread: "bg-info-subtle text-info-emphasis",

  // Primary
  "ready for do": "bg-primary-subtle text-primary",
  closed: "bg-primary-subtle text-primary",
  "fully arrived": "bg-primary-subtle text-primary-emphasis",
  "on going": "bg-primary-subtle text-primary",
};

const DEFAULT_STATUS_CLASS = "bg-secondary-subtle text-secondary";
const WAITING_STATUS_CLASS = "bg-warning-subtle text-warning-emphasis";

function getStatusClassName(value: string): string {
  const normalized = value.trim().toLowerCase();

  // 1. Exact match has highest priority.
  const exactMatch = STATUS_CLASSES[normalized];

  if (exactMatch !== undefined) {
    return exactMatch;
  }

  // 2. Dynamic matching for status variants.
  if (normalized.startsWith("waiting for approval")) {
    return WAITING_STATUS_CLASS;
  }

  // Accounting status variants not covered by exact matches.
  if (normalized.includes("reject")) {
    return "bg-danger-subtle text-danger-emphasis";
  }
  if (normalized.includes("cancel")) {
    return "bg-dark-subtle text-dark-emphasis";
  }

  // 3. Fallback for unknown status.
  return DEFAULT_STATUS_CLASS;
}

export function StatusBadge({ label, status }: StatusBadgeProps) {
  const displayLabel =
    status?.trim().toLowerCase() || label?.trim().toLowerCase() || "Unknown";

  return (
    <span
      className={`badge rounded-pill text-capitalize ${getStatusClassName(displayLabel)}`}
    >
      {displayLabel}
    </span>
  );
}
