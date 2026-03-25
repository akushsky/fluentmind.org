import { useTranslation } from "react-i18next";
import TeacherCard from "./TeacherCard";
import AnimatedSection from "./AnimatedSection";
import type { Teacher } from "../types";

export default function Teachers() {
  const { t } = useTranslation();
  const teachers = t("teachers.items", { returnObjects: true }) as Teacher[];

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
          {teachers.map((teacher, index) => (
            <AnimatedSection
              key={teacher.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <TeacherCard teacher={teacher} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
