import { COLORS } from "../constants/colors";
import type { Teacher } from "../types";

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article
      className="flex flex-col rounded-3xl border bg-white p-5 shadow-sm"
      aria-labelledby={`teacher-${teacher.id}-name`}
    >
      <div className="mb-4 flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold text-white"
          style={{ backgroundColor: COLORS.primary }}
          aria-hidden="true"
        >
          {teacher.initials}
        </div>
        <div>
          <h3
            id={`teacher-${teacher.id}-name`}
            className="text-lg font-semibold text-slate-900"
          >
            {teacher.name}
          </h3>
          <p
            className="text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: COLORS.accent }}
          >
            {teacher.languages.join(" · ")}
          </p>
        </div>
      </div>

      <p className="mb-3 text-sm text-slate-600">{teacher.description}</p>

      <ul className="mb-4 mt-auto space-y-1 text-xs text-slate-500">
        {teacher.specialties.map((specialty, index) => (
          <li key={index}>• {specialty}</li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        style={{ backgroundColor: COLORS.primary }}
        aria-label={`Записаться к ${teacher.name}`}
      >
        Записаться к {teacher.name.split(" ")[0]}
      </button>
    </article>
  );
}

