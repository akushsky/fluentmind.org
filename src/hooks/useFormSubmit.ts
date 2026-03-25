import { useState, useCallback } from "react";
import type { FormState } from "../types";

type ValidationRules = Record<string, (value: string) => string | null>;

export function useFormSubmit(validationRules: ValidationRules) {
  const [state, setState] = useState<FormState>({ status: "idle", errors: {} });

  const validate = useCallback(
    (fields: Record<string, string>): boolean => {
      const errors: Record<string, string> = {};
      for (const [field, rule] of Object.entries(validationRules)) {
        const error = rule(fields[field] || "");
        if (error) errors[field] = error;
      }
      setState({ status: "idle", errors });
      return Object.keys(errors).length === 0;
    },
    [validationRules],
  );

  const submit = useCallback(
    (fields: Record<string, string>) => {
      if (!validate(fields)) return;
      setState({ status: "submitting", errors: {} });
      // Simulated — replace setTimeout with fetch() when backend is ready
      setTimeout(() => {
        setState({ status: "success", errors: {} });
      }, 1500);
    },
    [validate],
  );

  const reset = useCallback(() => {
    setState({ status: "idle", errors: {} });
  }, []);

  return { state, submit, reset };
}
