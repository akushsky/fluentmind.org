/** ILS price lists from Fluent Mind PDFs (Sep 2026). EUR TBD — site shows ₪ only. */

export function formatIls(amount: number): string {
  return `${amount.toLocaleString("ru-RU")} ₪`;
}

export type DurationRateRow = {
  id: string;
  labelKey: string;
  noteKey?: string;
  one: number;
  four: number;
  eight: number;
};

export type CompareRow = {
  id: string;
  labelKey: string;
  regular: number;
  package: number;
  discount?: number;
};

export type CuratorshipRow = {
  id: string;
  labelKey: string;
  once: number;
  twice: number;
  thrice: number;
};

export type TriplePackageRow = {
  id: string;
  languages: number;
  math: number;
  neuro: number;
  separate: number;
  package: number;
  discount: number;
};

/** Language lessons — Israel: 30 / 45 / 60 min. */
export const languageDurationRates: DurationRateRow[] = [
  {
    id: "lang-30",
    labelKey: "pricing.durations.min30",
    noteKey: "pricing.languages.note30",
    one: 75,
    four: 300,
    eight: 600,
  },
  {
    id: "lang-45",
    labelKey: "pricing.durations.min45",
    one: 115,
    four: 460,
    eight: 920,
  },
  {
    id: "lang-60",
    labelKey: "pricing.durations.min60",
    one: 150,
    four: 600,
    eight: 1200,
  },
];

/** Intensive: 3 language lessons / week → 12 / month. */
export const intensiveLanguageRows: CompareRow[] = [
  {
    id: "int-45",
    labelKey: "pricing.durations.min45",
    regular: 1380,
    package: 1300,
  },
  {
    id: "int-60",
    labelKey: "pricing.durations.min60",
    regular: 1800,
    package: 1700,
  },
];

export const mathBaseRates = {
  min45: 140,
  min60: 175,
};

export const languageBaseRates = {
  min45: 115,
  min60: 150,
};

export const neuroBaseRates = {
  min45: 150,
  min60: 200,
};

/** Languages + math packages. Label is e.g. "1+1" via translation with params. */
export const languageMath45: CompareRow[] = [
  { id: "lm45-1-1", labelKey: "1+1", regular: 1020, package: 1020, discount: 0 },
  { id: "lm45-1-2", labelKey: "1+2", regular: 1580, package: 1500, discount: 80 },
  { id: "lm45-2-1", labelKey: "2+1", regular: 1480, package: 1400, discount: 80 },
  { id: "lm45-1-3", labelKey: "1+3", regular: 2140, package: 2050, discount: 90 },
  { id: "lm45-2-2", labelKey: "2+2", regular: 2040, package: 1950, discount: 90 },
  { id: "lm45-3-1", labelKey: "3+1", regular: 1940, package: 1850, discount: 90 },
  { id: "lm45-2-3", labelKey: "2+3", regular: 2600, package: 2500, discount: 100 },
  { id: "lm45-3-2", labelKey: "3+2", regular: 2500, package: 2400, discount: 100 },
  { id: "lm45-3-3", labelKey: "3+3", regular: 3060, package: 2910, discount: 150 },
];

export const languageMath60: CompareRow[] = [
  { id: "lm60-1-1", labelKey: "1+1", regular: 1300, package: 1300, discount: 0 },
  { id: "lm60-1-2", labelKey: "1+2", regular: 2000, package: 1910, discount: 90 },
  { id: "lm60-2-1", labelKey: "2+1", regular: 1900, package: 1810, discount: 90 },
  { id: "lm60-1-3", labelKey: "1+3", regular: 2700, package: 2600, discount: 100 },
  { id: "lm60-2-2", labelKey: "2+2", regular: 2600, package: 2500, discount: 100 },
  { id: "lm60-3-1", labelKey: "3+1", regular: 2500, package: 2400, discount: 100 },
  { id: "lm60-2-3", labelKey: "2+3", regular: 3300, package: 3190, discount: 110 },
  { id: "lm60-3-2", labelKey: "3+2", regular: 3200, package: 3090, discount: 110 },
  { id: "lm60-3-3", labelKey: "3+3", regular: 3900, package: 3780, discount: 120 },
];

/** Individual neuro-pedagogical curatorship (program includes lessons + Anastasia). */
export const curatorshipRows: CuratorshipRow[] = [
  { id: "cur-30", labelKey: "pricing.durations.min30", once: 780, twice: 1560, thrice: 2340 },
  { id: "cur-45", labelKey: "pricing.durations.min45", once: 940, twice: 1880, thrice: 2820 },
  { id: "cur-60", labelKey: "pricing.durations.min60", once: 1080, twice: 2160, thrice: 3240 },
];

/** Languages + neuropsychologist (neuro always 1×/week). */
export const languageNeuro45: CompareRow[] = [
  { id: "ln45-1", labelKey: "1", regular: 1060, package: 1000, discount: 60 },
  { id: "ln45-2", labelKey: "2", regular: 1520, package: 1450, discount: 70 },
  { id: "ln45-3", labelKey: "3", regular: 1980, package: 1900, discount: 80 },
  { id: "ln45-4", labelKey: "4", regular: 2440, package: 2350, discount: 90 },
  { id: "ln45-5", labelKey: "5", regular: 2900, package: 2800, discount: 100 },
  { id: "ln45-6", labelKey: "6", regular: 3360, package: 3250, discount: 110 },
];

export const languageNeuro60: CompareRow[] = [
  { id: "ln60-1", labelKey: "1", regular: 1400, package: 1320, discount: 80 },
  { id: "ln60-2", labelKey: "2", regular: 2000, package: 1900, discount: 100 },
  { id: "ln60-3", labelKey: "3", regular: 2600, package: 2480, discount: 120 },
  { id: "ln60-4", labelKey: "4", regular: 3200, package: 3060, discount: 140 },
  { id: "ln60-5", labelKey: "5", regular: 3800, package: 3640, discount: 160 },
  { id: "ln60-6", labelKey: "6", regular: 4400, package: 4220, discount: 180 },
];

/** Languages + math + neuropsychologist. */
export const languageMathNeuro45: TriplePackageRow[] = [
  { id: "lmn45-1-1", languages: 1, math: 1, neuro: 1, separate: 1620, package: 1550, discount: 70 },
  { id: "lmn45-1-2", languages: 1, math: 2, neuro: 1, separate: 2180, package: 2100, discount: 80 },
  { id: "lmn45-2-1", languages: 2, math: 1, neuro: 1, separate: 2080, package: 2000, discount: 80 },
  { id: "lmn45-2-2", languages: 2, math: 2, neuro: 1, separate: 2640, package: 2550, discount: 90 },
  { id: "lmn45-3-1", languages: 3, math: 1, neuro: 1, separate: 2540, package: 2450, discount: 90 },
  { id: "lmn45-3-2", languages: 3, math: 2, neuro: 1, separate: 3100, package: 3000, discount: 100 },
  { id: "lmn45-4-1", languages: 4, math: 1, neuro: 1, separate: 3000, package: 2900, discount: 100 },
  { id: "lmn45-4-2", languages: 4, math: 2, neuro: 1, separate: 3560, package: 3450, discount: 110 },
];

export const languageMathNeuro60: TriplePackageRow[] = [
  { id: "lmn60-1-1", languages: 1, math: 1, neuro: 1, separate: 2100, package: 2000, discount: 100 },
  { id: "lmn60-1-2", languages: 1, math: 2, neuro: 1, separate: 2800, package: 2700, discount: 100 },
  { id: "lmn60-2-1", languages: 2, math: 1, neuro: 1, separate: 2700, package: 2600, discount: 100 },
  { id: "lmn60-2-2", languages: 2, math: 2, neuro: 1, separate: 3400, package: 3250, discount: 150 },
  { id: "lmn60-3-1", languages: 3, math: 1, neuro: 1, separate: 3300, package: 3150, discount: 150 },
  { id: "lmn60-3-2", languages: 3, math: 2, neuro: 1, separate: 4000, package: 3850, discount: 150 },
  { id: "lmn60-4-1", languages: 4, math: 1, neuro: 1, separate: 3900, package: 3750, discount: 150 },
  { id: "lmn60-4-2", languages: 4, math: 2, neuro: 1, separate: 4600, package: 4400, discount: 200 },
];
