import PricesSection from "../components/Prices";
import { usePageMeta } from "../hooks/usePageMeta";

export default function PricesPage() {
  usePageMeta({
    title: "Услуги и цены — Fluent Mind",
    description:
      "Стоимость индивидуальных занятий и пакетов в Fluent Mind: языки, математика, нейропсихолог. Цены в шекелях и евро.",
    path: "/prices",
  });

  return <PricesSection />;
}
