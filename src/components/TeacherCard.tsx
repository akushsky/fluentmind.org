import { useState } from "react";
import { useTranslation } from "react-i18next";
import { teacherPhotos } from "../assets/teachers";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import type { Teacher } from "../types";
import ReviewsModal from "./ReviewsModal";

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const { t } = useTranslation();
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const hasReviews = teacher.reviews && teacher.reviews.length > 0;
  const photo = teacherPhotos[teacher.id];
  const signUpName = teacher.nameDative ?? teacher.name.split(" ")[0];
  const whatsAppName =
    teacher.nameDativeFull ?? teacher.nameDative ?? teacher.name;

  return (
    <article
      className="flex h-full flex-col rounded-3xl border bg-white p-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
      aria-labelledby={`teacher-${teacher.id}-name`}
    >
      <div className="mb-4 flex items-center gap-4">
        {photo ? (
          <img
            src={photo}
            alt={teacher.name}
            className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
          />
        ) : (
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white"
            aria-hidden="true"
          >
            {teacher.initials}
          </div>
        )}
        <div>
          <h3
            id={`teacher-${teacher.id}-name`}
            className="text-lg font-semibold text-slate-900"
          >
            {teacher.name}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
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

      {hasReviews && (
        <button
          type="button"
          onClick={() => setReviewsOpen(true)}
          className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary/70 transition-colors hover:text-primary"
        >
          <span>💬</span>
          {t("teachers.reviewsButton", { count: teacher.reviews!.length })}
        </button>
      )}

      <a
        href={buildWhatsAppUrl(
          t("whatsapp.messages.teacher", { name: whatsAppName }),
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        aria-label={t("teachers.signUp", { name: signUpName })}
      >
        {t("teachers.signUp", { name: signUpName })}
      </a>

      {hasReviews && (
        <ReviewsModal
          teacher={teacher}
          isOpen={reviewsOpen}
          onClose={() => setReviewsOpen(false)}
        />
      )}
    </article>
  );
}
