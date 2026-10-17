import CareersSection from "../components/Careers";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../seo/routes";

export default function CareersPage() {
  usePageMeta(PAGE_META.careers);

  return <CareersSection />;
}
