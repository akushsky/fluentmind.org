export type Currency = "ils" | "eur";

export type Money = {
  ils: number;
  eur: number;
};

export type LessonRow = {
  id: string;
  labelKey: string;
  min45: Money;
  min60: Money;
  month45: Money;
  month60: Money;
};

export type ProgramRow = {
  id: string;
  labelKey: string;
  subjectOnly: Money;
  regularWithSupport: Money;
  program: Money;
};

export type PackageRow = {
  id: string;
  labelKey: string;
  regular: number;
  package: number;
};

export const CURRENCY_STORAGE_KEY = "fluentmind-prices-currency";

export function formatPrice(amount: number, currency: Currency): string {
  if (currency === "eur") {
    return `€${amount}`;
  }
  return `${amount} ₪`;
}

export function pickMoney(money: Money, currency: Currency): number {
  return money[currency];
}

/** Individual lesson rates (per lesson and monthly for 4 weeks × 1/week). */
export const individualLessons: LessonRow[] = [
  {
    id: "languages",
    labelKey: "pricing.subjects.languages",
    min45: { ils: 115, eur: 33 },
    min60: { ils: 150, eur: 43 },
    month45: { ils: 460, eur: 132 },
    month60: { ils: 600, eur: 172 },
  },
  {
    id: "math",
    labelKey: "pricing.subjects.math",
    min45: { ils: 140, eur: 40 },
    min60: { ils: 175, eur: 50 },
    month45: { ils: 560, eur: 160 },
    month60: { ils: 700, eur: 200 },
  },
];

/** Personal guidance (Anastasia) per-lesson rates. */
export const guidanceRates = {
  outside: { ils: 180, eur: 52 },
  inProgram: { ils: 120, eur: 35 },
};

export const guidanceLanguageRows: ProgramRow[] = [
  {
    id: "g-lang-45-1",
    labelKey: "pricing.formats.x45x1",
    subjectOnly: { ils: 460, eur: 132 },
    regularWithSupport: { ils: 1180, eur: 340 },
    program: { ils: 940, eur: 272 },
  },
  {
    id: "g-lang-60-1",
    labelKey: "pricing.formats.x60x1",
    subjectOnly: { ils: 600, eur: 172 },
    regularWithSupport: { ils: 1320, eur: 380 },
    program: { ils: 1080, eur: 312 },
  },
  {
    id: "g-lang-45-2",
    labelKey: "pricing.formats.x45x2",
    subjectOnly: { ils: 920, eur: 264 },
    regularWithSupport: { ils: 2360, eur: 680 },
    program: { ils: 1880, eur: 544 },
  },
  {
    id: "g-lang-60-2",
    labelKey: "pricing.formats.x60x2",
    subjectOnly: { ils: 1200, eur: 344 },
    regularWithSupport: { ils: 2640, eur: 760 },
    program: { ils: 2160, eur: 624 },
  },
];

export const guidanceMathRows: ProgramRow[] = [
  {
    id: "g-math-45-1",
    labelKey: "pricing.formats.x45x1",
    subjectOnly: { ils: 560, eur: 160 },
    regularWithSupport: { ils: 1280, eur: 368 },
    program: { ils: 1040, eur: 300 },
  },
  {
    id: "g-math-60-1",
    labelKey: "pricing.formats.x60x1",
    subjectOnly: { ils: 700, eur: 200 },
    regularWithSupport: { ils: 1420, eur: 408 },
    program: { ils: 1180, eur: 340 },
  },
  {
    id: "g-math-45-2",
    labelKey: "pricing.formats.x45x2",
    subjectOnly: { ils: 1120, eur: 320 },
    regularWithSupport: { ils: 2560, eur: 736 },
    program: { ils: 2080, eur: 600 },
  },
  {
    id: "g-math-60-2",
    labelKey: "pricing.formats.x60x2",
    subjectOnly: { ils: 1400, eur: 400 },
    regularWithSupport: { ils: 2840, eur: 816 },
    program: { ils: 2360, eur: 680 },
  },
];

/** Neuropsychologist per-lesson rates. */
export const neuroRates = {
  outside45: { ils: 165, eur: 47 },
  outside60: { ils: 220, eur: 63 },
  inProgram45: { ils: 135, eur: 39 },
  inProgram60: { ils: 180, eur: 52 },
};

export const neuroLanguageRows: ProgramRow[] = [
  {
    id: "n-lang-45-1",
    labelKey: "pricing.formats.x45x1",
    subjectOnly: { ils: 460, eur: 132 },
    regularWithSupport: { ils: 1120, eur: 320 },
    program: { ils: 1000, eur: 288 },
  },
  {
    id: "n-lang-60-1",
    labelKey: "pricing.formats.x60x1",
    subjectOnly: { ils: 600, eur: 172 },
    regularWithSupport: { ils: 1480, eur: 424 },
    program: { ils: 1320, eur: 380 },
  },
  {
    id: "n-lang-45-2",
    labelKey: "pricing.formats.x45x2",
    subjectOnly: { ils: 920, eur: 264 },
    regularWithSupport: { ils: 2240, eur: 640 },
    program: { ils: 2000, eur: 576 },
  },
  {
    id: "n-lang-60-2",
    labelKey: "pricing.formats.x60x2",
    subjectOnly: { ils: 1200, eur: 344 },
    regularWithSupport: { ils: 2960, eur: 848 },
    program: { ils: 2640, eur: 760 },
  },
];

export const neuroMathRows: ProgramRow[] = [
  {
    id: "n-math-45-1",
    labelKey: "pricing.formats.x45x1",
    subjectOnly: { ils: 560, eur: 160 },
    regularWithSupport: { ils: 1220, eur: 348 },
    program: { ils: 1100, eur: 316 },
  },
  {
    id: "n-math-60-1",
    labelKey: "pricing.formats.x60x1",
    subjectOnly: { ils: 700, eur: 200 },
    regularWithSupport: { ils: 1580, eur: 452 },
    program: { ils: 1420, eur: 408 },
  },
  {
    id: "n-math-45-2",
    labelKey: "pricing.formats.x45x2",
    subjectOnly: { ils: 1120, eur: 320 },
    regularWithSupport: { ils: 2440, eur: 696 },
    program: { ils: 2200, eur: 632 },
  },
  {
    id: "n-math-60-2",
    labelKey: "pricing.formats.x60x2",
    subjectOnly: { ils: 1400, eur: 400 },
    regularWithSupport: { ils: 3160, eur: 904 },
    program: { ils: 2840, eur: 816 },
  },
];

/** Multi-subject packages — ILS only. */
export const packageTwoLanguages: PackageRow[] = [
  { id: "p2l-45-1", labelKey: "pricing.packageFormats.x45x1", regular: 920, package: 870 },
  { id: "p2l-60-1", labelKey: "pricing.packageFormats.x60x1", regular: 1200, package: 1150 },
  { id: "p2l-45-2", labelKey: "pricing.packageFormats.x45x2", regular: 1840, package: 1740 },
  { id: "p2l-60-2", labelKey: "pricing.packageFormats.x60x2", regular: 2400, package: 2300 },
];

export const packageLanguageMath: PackageRow[] = [
  { id: "plm-45-1", labelKey: "pricing.packageFormats.x45x1", regular: 1020, package: 970 },
  { id: "plm-60-1", labelKey: "pricing.packageFormats.x60x1", regular: 1300, package: 1250 },
  { id: "plm-45-2", labelKey: "pricing.packageFormats.x45x2", regular: 2040, package: 1940 },
  { id: "plm-60-2", labelKey: "pricing.packageFormats.x60x2", regular: 2600, package: 2500 },
];

export const packageThreeLanguages: PackageRow[] = [
  { id: "p3l-45-1", labelKey: "pricing.packageFormats.x45x1", regular: 1380, package: 1280 },
  { id: "p3l-60-1", labelKey: "pricing.packageFormats.x60x1", regular: 1800, package: 1700 },
  { id: "p3l-45-2", labelKey: "pricing.packageFormats.x45x2", regular: 2760, package: 2560 },
  { id: "p3l-60-2", labelKey: "pricing.packageFormats.x60x2", regular: 3600, package: 3400 },
];

export const packageTwoLanguagesMath: PackageRow[] = [
  { id: "p2lm-45-1", labelKey: "pricing.packageFormats.x45x1", regular: 1480, package: 1380 },
  { id: "p2lm-60-1", labelKey: "pricing.packageFormats.x60x1", regular: 1900, package: 1800 },
  { id: "p2lm-45-2", labelKey: "pricing.packageFormats.x45x2", regular: 2960, package: 2760 },
  { id: "p2lm-60-2", labelKey: "pricing.packageFormats.x60x2", regular: 3800, package: 3600 },
];
