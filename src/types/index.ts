export interface Review {
  author: string;
  text: string;
}

export interface Teacher {
  id: string;
  name: string;
  nameDative?: string;
  nameDativeFull?: string;
  initials: string;
  languages: string[];
  description: string;
  specialties: string[];
  reviews?: Review[];
}

export interface ContactFormData {
  name: string;
  contact: string;
  language?: string;
  goals?: string;
}

export interface TrialLessonFormData {
  name: string;
  contact: string;
  language: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface FormState {
  status: FormStatus;
  errors: Record<string, string>;
}
