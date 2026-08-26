import { useCallback, useEffect, useId, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import {
  CURRENCY_STORAGE_KEY,
  formatPrice,
  guidanceLanguageRows,
  guidanceMathRows,
  guidanceRates,
  individualLessons,
  neuroLanguageRows,
  neuroMathRows,
  neuroRates,
  packageLanguageMath,
  packageThreeLanguages,
  packageTwoLanguages,
  packageTwoLanguagesMath,
  pickMoney,
  type Currency,
  type PackageRow,
  type ProgramRow,
} from "../data/prices";

function readStoredCurrency(): Currency {
  try {
    const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (stored === "ils" || stored === "eur") return stored;
  } catch {
    /* ignore */
  }
  return "ils";
}

function PriceTable({
  headers,
  children,
}: {
  headers: string[];
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold whitespace-nowrap">
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

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3 className="text-lg font-bold text-primary md:text-xl">{title}</h3>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent transition-transform ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <div id={panelId} className="space-y-6 border-t border-slate-100 px-6 pb-6 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

function ProgramTable({
  rows,
  currency,
  subjectOnlyHeader,
  supportHeader,
  programHeader,
  formatHeader,
}: {
  rows: ProgramRow[];
  currency: Currency;
  subjectOnlyHeader: string;
  supportHeader: string;
  programHeader: string;
  formatHeader: string;
}) {
  const { t } = useTranslation();

  return (
    <PriceTable
      headers={[formatHeader, subjectOnlyHeader, supportHeader, programHeader]}
    >
      {rows.map((row) => (
        <tr key={row.id} className="bg-white">
          <td className="px-4 py-3 text-slate-700">{t(row.labelKey)}</td>
          <td className="px-4 py-3 whitespace-nowrap text-slate-600">
            {formatPrice(pickMoney(row.subjectOnly, currency), currency)}
          </td>
          <td className="px-4 py-3 whitespace-nowrap text-slate-600">
            {formatPrice(pickMoney(row.regularWithSupport, currency), currency)}
          </td>
          <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
            {formatPrice(pickMoney(row.program, currency), currency)}
          </td>
        </tr>
      ))}
    </PriceTable>
  );
}

function PackageTable({
  rows,
  formatHeader,
  regularHeader,
  packageHeader,
}: {
  rows: PackageRow[];
  formatHeader: string;
  regularHeader: string;
  packageHeader: string;
}) {
  const { t } = useTranslation();

  return (
    <PriceTable headers={[formatHeader, regularHeader, packageHeader]}>
      {rows.map((row) => (
        <tr key={row.id} className="bg-white">
          <td className="px-4 py-3 text-slate-700">{t(row.labelKey)}</td>
          <td className="px-4 py-3 whitespace-nowrap text-slate-600">
            {formatPrice(row.regular, "ils")}
          </td>
          <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
            {formatPrice(row.package, "ils")}
          </td>
        </tr>
      ))}
    </PriceTable>
  );
}

export default function Prices() {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState<Currency>("ils");

  useEffect(() => {
    setCurrency(readStoredCurrency());
  }, []);

  const setCurrencyPersist = useCallback((next: Currency) => {
    setCurrency(next);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

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
          </div>
        </AnimatedSection>

        <div className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t("pricing.currencyLabel")}
          </span>
          <div
            className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1"
            role="group"
            aria-label={t("pricing.currencyLabel")}
          >
            <button
              type="button"
              onClick={() => setCurrencyPersist("ils")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                currency === "ils"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              {t("pricing.currencyIls")}
            </button>
            <button
              type="button"
              onClick={() => setCurrencyPersist("eur")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                currency === "eur"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              {t("pricing.currencyEur")}
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <AnimatedSection delay={0.05}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-primary">
                {t("pricing.individual.title")}
              </h2>
              <PriceTable
                headers={[
                  t("pricing.columns.subject"),
                  t("pricing.columns.min45"),
                  t("pricing.columns.min60"),
                  t("pricing.columns.month45"),
                  t("pricing.columns.month60"),
                ]}
              >
                {individualLessons.map((row) => (
                  <tr key={row.id} className="bg-white">
                    <td className="px-4 py-3 text-slate-700">{t(row.labelKey)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                      {formatPrice(pickMoney(row.min45, currency), currency)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                      {formatPrice(pickMoney(row.min60, currency), currency)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                      {formatPrice(pickMoney(row.month45, currency), currency)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">
                      {formatPrice(pickMoney(row.month60, currency), currency)}
                    </td>
                  </tr>
                ))}
              </PriceTable>
              <p className="mt-3 text-xs text-slate-500">
                {t("pricing.individual.footnote")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion title={t("pricing.guidance.title")} defaultOpen>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.guidance.description")}
              </p>
              <p className="rounded-2xl bg-accent/10 px-4 py-3 text-sm text-slate-700">
                {t("pricing.guidance.rates", {
                  outside: formatPrice(
                    pickMoney(guidanceRates.outside, currency),
                    currency,
                  ),
                  inProgram: formatPrice(
                    pickMoney(guidanceRates.inProgram, currency),
                    currency,
                  ),
                })}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">
                  {t("pricing.guidance.languagesTitle")}
                </h4>
                <ProgramTable
                  rows={guidanceLanguageRows}
                  currency={currency}
                  formatHeader={t("pricing.columns.format")}
                  subjectOnlyHeader={t("pricing.columns.subjectOnly")}
                  supportHeader={t("pricing.columns.regularWithGuidance")}
                  programHeader={t("pricing.columns.program")}
                />
                <p className="text-xs text-slate-500">
                  {t("pricing.guidance.languagesNote")}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">
                  {t("pricing.guidance.mathTitle")}
                </h4>
                <ProgramTable
                  rows={guidanceMathRows}
                  currency={currency}
                  formatHeader={t("pricing.columns.format")}
                  subjectOnlyHeader={t("pricing.columns.subjectOnlyMath")}
                  supportHeader={t("pricing.columns.regularWithGuidance")}
                  programHeader={t("pricing.columns.program")}
                />
              </div>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Accordion title={t("pricing.neuro.title")}>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.neuro.description")}
              </p>
              <p className="rounded-2xl bg-accent/10 px-4 py-3 text-sm text-slate-700">
                {t("pricing.neuro.rates", {
                  outside45: formatPrice(
                    pickMoney(neuroRates.outside45, currency),
                    currency,
                  ),
                  outside60: formatPrice(
                    pickMoney(neuroRates.outside60, currency),
                    currency,
                  ),
                  inProgram45: formatPrice(
                    pickMoney(neuroRates.inProgram45, currency),
                    currency,
                  ),
                  inProgram60: formatPrice(
                    pickMoney(neuroRates.inProgram60, currency),
                    currency,
                  ),
                })}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">
                  {t("pricing.neuro.languagesTitle")}
                </h4>
                <ProgramTable
                  rows={neuroLanguageRows}
                  currency={currency}
                  formatHeader={t("pricing.columns.format")}
                  subjectOnlyHeader={t("pricing.columns.subjectOnly")}
                  supportHeader={t("pricing.columns.regularWithNeuro")}
                  programHeader={t("pricing.columns.program")}
                />
                <p className="text-xs text-slate-500">
                  {t("pricing.neuro.languagesNote")}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">
                  {t("pricing.neuro.mathTitle")}
                </h4>
                <ProgramTable
                  rows={neuroMathRows}
                  currency={currency}
                  formatHeader={t("pricing.columns.format")}
                  subjectOnlyHeader={t("pricing.columns.subjectOnlyMath")}
                  supportHeader={t("pricing.columns.regularWithNeuro")}
                  programHeader={t("pricing.columns.program")}
                />
              </div>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Accordion title={t("pricing.packages.title")}>
              {currency === "eur" ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-center">
                  <p className="text-sm text-slate-600">
                    {t("pricing.packages.eurOnlyNote")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setCurrencyPersist("ils")}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                  >
                    {t("pricing.packages.switchToIls")}
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {t("pricing.packages.intro")}
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-base font-bold text-primary">
                      {t("pricing.packages.twoSubjects")}
                    </h4>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-slate-800">
                        {t("pricing.packages.twoLanguages")}
                      </h5>
                      <p className="text-sm text-slate-600">
                        {t("pricing.packages.twoLanguagesDesc")}
                      </p>
                      <PackageTable
                        rows={packageTwoLanguages}
                        formatHeader={t("pricing.columns.format")}
                        regularHeader={t("pricing.columns.regular")}
                        packageHeader={t("pricing.columns.packagePrice")}
                      />
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-slate-800">
                        {t("pricing.packages.languageMath")}
                      </h5>
                      <p className="text-sm text-slate-600">
                        {t("pricing.packages.languageMathDesc")}
                      </p>
                      <PackageTable
                        rows={packageLanguageMath}
                        formatHeader={t("pricing.columns.format")}
                        regularHeader={t("pricing.columns.regular")}
                        packageHeader={t("pricing.columns.packagePrice")}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-base font-bold text-primary">
                      {t("pricing.packages.threeSubjects")}
                    </h4>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-slate-800">
                        {t("pricing.packages.threeLanguages")}
                      </h5>
                      <p className="text-sm text-slate-600">
                        {t("pricing.packages.threeLanguagesDesc")}
                      </p>
                      <PackageTable
                        rows={packageThreeLanguages}
                        formatHeader={t("pricing.columns.format")}
                        regularHeader={t("pricing.columns.regular")}
                        packageHeader={t("pricing.columns.packagePrice")}
                      />
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-slate-800">
                        {t("pricing.packages.twoLanguagesMath")}
                      </h5>
                      <p className="text-sm text-slate-600">
                        {t("pricing.packages.twoLanguagesMathDesc")}
                      </p>
                      <PackageTable
                        rows={packageTwoLanguagesMath}
                        formatHeader={t("pricing.columns.format")}
                        regularHeader={t("pricing.columns.regular")}
                        packageHeader={t("pricing.columns.packagePrice")}
                      />
                    </div>
                  </div>

                  <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {t("pricing.packages.customNote")}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">
                      {t("pricing.packages.howItWorksTitle")}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t("pricing.packages.howItWorks")}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">
                      {t("pricing.packages.cancelTitle")}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t("pricing.packages.cancel")}
                    </p>
                  </div>
                </div>
              )}
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-3 text-xl font-bold text-primary">
                {t("pricing.howToChoose.title")}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("pricing.howToChoose.body")}
              </p>
              <p className="mt-4 text-xs text-slate-500">
                {t("pricing.howToChoose.footnote")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
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
