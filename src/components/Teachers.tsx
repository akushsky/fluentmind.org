import { useTranslation } from "react-i18next";
import TeacherCard from "./TeacherCard";
import type { Teacher } from "../types";

// Mock data - in the future this could come from an API or CMS
const teachers: Teacher[] = [
  {
    id: "anastasia-dulich",
    name: "Анастасия Дулич",
    initials: "AD",
    languages: ["Английский", "Русский", "Сербский", "Хорватский"],
    description:
      "Индивидуальный подход, внимание к живой разговорной речи и уверенности в общении. Подготовка к экзаменам и собеседованиям.",
    specialties: [
      "Индивидуальные и парные занятия",
      "Подготовка к экзаменам и собеседованиям",
      "Разговорная практика для взрослых",
    ],
  },
  {
    id: "olga-basova",
    name: "Ольга Басова",
    initials: "ОБ",
    languages: ["Иврит", "Английский"],
    description:
      "Преподаватель иврита и английского языка. Опыт работы с детьми, подростками и взрослыми. Индивидуальный подход к каждому студенту.",
    specialties: [
      "Преподавание иврита",
      "Преподавание английского",
      "Индивидуальные занятия",
    ],
  },
  {
    id: "olga-biryukova",
    name: "Ольга Бирюкова",
    initials: "ОБ",
    languages: ["Психотерапия"],
    description:
      "Психотерапевт-дефектолог. Работа с особенностями развития, поддержка в обучении, нейродружелюбный подход.",
    specialties: [
      "Психотерапия",
      "Дефектология",
      "Нейродружелюбный подход",
    ],
  },
];

export default function Teachers() {
  const { t } = useTranslation();

  return (
    <section
      id="teachers"
      className="border-b bg-slate-50"
      aria-labelledby="teachers-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <h2
              id="teachers-title"
              className="text-2xl font-bold text-primary md:text-3xl"
            >
              {t("teachers.title")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t("teachers.description")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
