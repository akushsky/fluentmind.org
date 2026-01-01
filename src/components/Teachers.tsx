import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Более N лет преподавания, индивидуальный подход, внимание к живой разговорной речи и уверенности в общении.",
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
              className="text-2xl font-bold md:text-3xl"
              style={{ color: COLORS.primary }}
            >
              {CONTENT.teachers.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {CONTENT.teachers.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
          {CONTENT.teachers.placeholderCards.map((placeholder, index) => (
            <article
              key={`placeholder-${index}`}
              className="flex flex-col items-start justify-center rounded-3xl border border-dashed bg-white/60 p-5 text-sm text-slate-400"
              aria-label="Место для будущей карточки преподавателя"
            >
              {placeholder}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



