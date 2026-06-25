export const WHATSAPP_NUMBER = "972587971733";

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const COURSE_MESSAGE_KEYS: Record<string, string> = {
  "individual-lessons": "whatsapp.messages.courseIndividual",
  "mini-groups": "whatsapp.messages.courseMiniGroup",
  "specialized-programs": "whatsapp.messages.courseSpecialized",
};

export function getCourseMessageKey(courseId: string): string {
  return COURSE_MESSAGE_KEYS[courseId] ?? "whatsapp.messages.general";
}
