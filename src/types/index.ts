export interface Teacher {
  id: string;
  name: string;
  initials: string;
  languages: string[];
  description: string;
  specialties: string[];
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



