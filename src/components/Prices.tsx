import { useId, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import {
  curatorshipRows,
  formatIls,
  intensiveLanguageRows,
  languageBaseRates,
  languageDurationRates,
  languageMath45,
  languageMath60,
  languageMathNeuro45,
  languageMathNeuro60,
  languageNeuro45,
  languageNeuro60,
  mathBaseRates,
  neuroBaseRates,
  type CompareRow,
} from "../data/prices";

function PriceTable({
  headers,
  children,
  minWidth = "32rem",
}: {
  headers: string[];
  children: ReactNode;
  minWidth?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table
        className="w-full border-collapse text-left text-sm"
        style={{ minWidth }}
      >
        <thead>
          <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-semibold whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">{children}</tbody>
      </table>
    </div>
  );
}

function Accordion({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const titleId = useId();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          id={titleId}
          className="text-lg font-bold text-primary md:text-xl"
        >
          {title}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent transition-transform ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        hidden={!open}
        className="space-y-6 border-t border-slate-100 px-6 pb-6 pt-5"
      >
        {children}
      </div>
    </div>
  );
}

function ComparePackageTable({
  rows,
  labelHeader,
  labelFor,
  showDiscount = true,
  discountHeader,
  separateHeader,
}: {
  rows: CompareRow[];
  labelHeader: string;
  labelFor: (row: CompareRow) => string;
  showDiscount?: boolean;
  discountHeader?: string;
  separateHeader?: string;
}) {
  const { t } = useTranslation();
  const headers = showDiscount
    ? [
        labelHeader,
        separateHeader ?? t("pricing.columns.regular"),
        discountHeader ?? t("pricing.columns.discount"),
        t("pricing.columns.packagePrice"),
      ]
    : [
        labelHeader,
        t("pricing.columns.regular12"),
        t("pricing.columns.program12"),
      ];

  return (
    <PriceTable headers={headers}>
      {rows.map((row) => (
        <tr key={row.id} className="bg-white">
          <td className="px-4 py-3 text-slate-700">{labelFor(row)}</td>
          <td className="px-4 py-3 whitespace-nowrap text-slate-600">
            {formatIls(row.regular)}
          </td>
          {showDiscount && (
            <td className="px-4 py-3 whitespace-nowrap text-slate-500">
              {row.discount != null && row.discount > 0
                ? formatIls(row.discount)
                : t("pricing.languageMath.dash")}
            </td>
          )}
          <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
            {formatIls(row.package)}
          </td>
        </tr>
      ))}
    </PriceTable>
  );
}

export default function Prices() {
  const { t } = useTranslation();
  const curatorshipBullets = t("pricing.curatorship.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="border-b bg-white" aria-labelledby="prices-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h1
              id="prices-title"
              className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl"
            >
              {t("pricing.title")}
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
              {t("pricing.subtitle")}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              {t("pricing.intro")}
            </p>
            <p className="mt-3 text-xs text-slate-400">{t("pricing.eurSoon")}</p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          <AnimatedSection delay={0.05}>
            <Accordion title={t("pricing.languages.title")} defaultOpen>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.languages.intro")}
              </p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t("pricing.languages.listLabel")}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {t("pricing.languages.list")}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languages.standardTitle")}
                </h3>
                <PriceTable
                  headers={[
                    t("pricing.columns.format"),
                    t("pricing.columns.one"),
                    t("pricing.columns.four"),
                    t("pricing.columns.eight"),
                  ]}
                >
                  {languageDurationRates.map((row) => (
                    <tr key={row.id} className="bg-white">
                      <td className="px-4 py-3 text-slate-700">
                        {t(row.labelKey)}
                        {row.noteKey ? "*" : ""}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                        {formatIls(row.one)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.four)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.eight)}
                      </td>
                    </tr>
                  ))}
                </PriceTable>
                <p className="text-xs text-slate-500">
                  *{t("pricing.languages.note30")}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languages.intensiveTitle")}
                </h3>
                <p className="text-sm text-slate-600">
                  {t("pricing.languages.intensiveIntro")}
                </p>
                <ComparePackageTable
                  rows={intensiveLanguageRows}
                  labelHeader={t("pricing.columns.format")}
                  labelFor={(row) => t(row.labelKey)}
                  showDiscount={false}
                />
                <p className="rounded-2xl bg-accent/10 px-4 py-3 text-sm text-slate-700">
                  {t("pricing.languages.intensiveExample")}
                </p>
              </div>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion title={t("pricing.languageMath.title")}>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.languageMath.intro")}
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageMath.baseTitle")}
                </h3>
                <PriceTable
                  headers={[
                    t("pricing.columns.subject"),
                    t("pricing.columns.min45"),
                    t("pricing.columns.min60"),
                  ]}
                  minWidth="24rem"
                >
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-slate-700">
                      {t("pricing.languageMath.languageLesson")}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                      {formatIls(languageBaseRates.min45)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                      {formatIls(languageBaseRates.min60)}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-slate-700">
                      {t("pricing.languageMath.math")}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                      {formatIls(mathBaseRates.min45)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                      {formatIls(mathBaseRates.min60)}
                    </td>
                  </tr>
                </PriceTable>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageMath.table45")}
                </h3>
                <ComparePackageTable
                  rows={languageMath45}
                  labelHeader={t("pricing.columns.combo")}
                  labelFor={(row) => row.labelKey}
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageMath.table60")}
                </h3>
                <ComparePackageTable
                  rows={languageMath60}
                  labelHeader={t("pricing.columns.combo")}
                  labelFor={(row) => row.labelKey}
                />
              </div>

              <p className="text-xs text-slate-500">
                {t("pricing.languageMath.howToRead")}
              </p>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Accordion title={t("pricing.curatorship.title")}>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.curatorship.intro")}
              </p>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  {t("pricing.curatorship.howTitle")}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t("pricing.curatorship.how")}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  {t("pricing.curatorship.whatTitle")}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t("pricing.curatorship.what")}
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {curatorshipBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-0.5 text-accent" aria-hidden="true">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="rounded-2xl bg-accent/10 px-4 py-3 text-sm text-slate-700">
                  {t("pricing.curatorship.summary")}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.curatorship.costTitle")}
                </h3>
                <PriceTable
                  headers={[
                    t("pricing.columns.duration"),
                    t("pricing.columns.once"),
                    t("pricing.columns.twice"),
                    t("pricing.columns.thrice"),
                  ]}
                >
                  {curatorshipRows.map((row) => (
                    <tr key={row.id} className="bg-white">
                      <td className="px-4 py-3 text-slate-700">
                        {t(row.labelKey)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.once)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.twice)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.thrice)}
                      </td>
                    </tr>
                  ))}
                </PriceTable>
                <p className="text-xs text-slate-500">
                  {t("pricing.curatorship.includes")}
                </p>
              </div>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Accordion title={t("pricing.languageNeuro.title")}>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.languageNeuro.intro")}
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageNeuro.table45")}
                </h3>
                <ComparePackageTable
                  rows={languageNeuro45}
                  labelHeader={t("pricing.columns.languagesWeek")}
                  labelFor={(row) =>
                    t("pricing.languageNeuro.comboLabel", { n: row.labelKey })
                  }
                  separateHeader={t("pricing.columns.separate")}
                  discountHeader={t("pricing.columns.benefit")}
                />
                <p className="text-xs text-slate-500">
                  {t("pricing.languageNeuro.base45", {
                    lang: formatIls(languageBaseRates.min45),
                    neuro: formatIls(neuroBaseRates.min45),
                  })}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageNeuro.table60")}
                </h3>
                <ComparePackageTable
                  rows={languageNeuro60}
                  labelHeader={t("pricing.columns.languagesWeek")}
                  labelFor={(row) =>
                    t("pricing.languageNeuro.comboLabel", { n: row.labelKey })
                  }
                  separateHeader={t("pricing.columns.separate")}
                  discountHeader={t("pricing.columns.benefit")}
                />
                <p className="text-xs text-slate-500">
                  {t("pricing.languageNeuro.base60", {
                    lang: formatIls(languageBaseRates.min60),
                    neuro: formatIls(neuroBaseRates.min60),
                  })}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageNeuro.howTitle")}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t("pricing.languageNeuro.how")}
                </p>
              </div>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <Accordion title={t("pricing.languageMathNeuro.title")}>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {t("pricing.languageMathNeuro.subtitle")}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.languageMathNeuro.intro")}
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageMathNeuro.table45")}
                </h3>
                <PriceTable
                  headers={[
                    t("pricing.columns.languages"),
                    t("pricing.columns.math"),
                    t("pricing.columns.neuro"),
                    t("pricing.columns.separate"),
                    t("pricing.columns.packagePrice"),
                    t("pricing.columns.benefit"),
                  ]}
                  minWidth="40rem"
                >
                  {languageMathNeuro45.map((row) => (
                    <tr key={row.id} className="bg-white">
                      <td className="px-4 py-3 text-slate-700">{row.languages}</td>
                      <td className="px-4 py-3 text-slate-700">{row.math}</td>
                      <td className="px-4 py-3 text-slate-700">{row.neuro}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                        {formatIls(row.separate)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.package)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-500">
                        {formatIls(row.discount)}
                      </td>
                    </tr>
                  ))}
                </PriceTable>
                <p className="text-xs text-slate-500">
                  {t("pricing.languageMathNeuro.base45", {
                    lang: formatIls(languageBaseRates.min45),
                    math: formatIls(mathBaseRates.min45),
                    neuro: formatIls(neuroBaseRates.min45),
                  })}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageMathNeuro.table60")}
                </h3>
                <PriceTable
                  headers={[
                    t("pricing.columns.languages"),
                    t("pricing.columns.math"),
                    t("pricing.columns.neuro"),
                    t("pricing.columns.separate"),
                    t("pricing.columns.packagePrice"),
                    t("pricing.columns.benefit"),
                  ]}
                  minWidth="40rem"
                >
                  {languageMathNeuro60.map((row) => (
                    <tr key={row.id} className="bg-white">
                      <td className="px-4 py-3 text-slate-700">{row.languages}</td>
                      <td className="px-4 py-3 text-slate-700">{row.math}</td>
                      <td className="px-4 py-3 text-slate-700">{row.neuro}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                        {formatIls(row.separate)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                        {formatIls(row.package)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-500">
                        {formatIls(row.discount)}
                      </td>
                    </tr>
                  ))}
                </PriceTable>
                <p className="text-xs text-slate-500">
                  {t("pricing.languageMathNeuro.base60", {
                    lang: formatIls(languageBaseRates.min60),
                    math: formatIls(mathBaseRates.min60),
                    neuro: formatIls(neuroBaseRates.min60),
                  })}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  {t("pricing.languageMathNeuro.importantTitle")}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t("pricing.languageMathNeuro.important")}
                </p>
              </div>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-center text-xs text-slate-400">
              {t("pricing.footnoteWeeks")}
            </p>
            <div className="flex justify-center pt-2">
              <a
                href={buildWhatsAppUrl(t("whatsapp.messages.pricing"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                {t("pricing.cta")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
