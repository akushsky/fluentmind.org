export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export const PAGE_META = {
  home: {
    title: "Fluent Mind - Онлайн-школа с нейроподходом",
    description:
      "Онлайн-школа иностранных языков с нейродружелюбным подходом. Индивидуальные занятия и мини-группы для детей, подростков и взрослых.",
    path: "/",
  },
  prices: {
    title: "Услуги и цены — Fluent Mind",
    description:
      "Стоимость индивидуальных занятий и пакетов в Fluent Mind: языки, математика, нейропсихолог. Цены в шекелях и евро.",
    path: "/prices",
  },
  careers: {
    title: "Карьера — Fluent Mind",
    description:
      "Вакансии в онлайн-школе Fluent Mind: присоединяйтесь к команде преподавателей и нейроспециалистов.",
    path: "/careers",
  },
} satisfies Record<string, PageMeta>;

export const SITE_URL = "https://www.fluentmind.org";
