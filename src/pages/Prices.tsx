import PricesSection from "../components/Prices";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../seo/routes";

export default function PricesPage() {
  usePageMeta(PAGE_META.prices);

  return <PricesSection />;
}
