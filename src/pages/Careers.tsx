import CareersSection from "../components/Careers";
import { usePageMeta } from "../hooks/usePageMeta";

export default function CareersPage() {
  usePageMeta({
    title: "Карьера — Fluent Mind",
    description:
      "Вакансии в онлайн-школе Fluent Mind: присоединяйтесь к команде преподавателей и нейроспециалистов.",
    path: "/careers",
  });

  return <CareersSection />;
}
