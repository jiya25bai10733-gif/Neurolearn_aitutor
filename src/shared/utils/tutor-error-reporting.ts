type TutorErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type TutorEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: TutorErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __tutorEvents?: TutorEvents;
  }
}

export function reportTutorError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__tutorEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
