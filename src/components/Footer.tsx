import { CONTENT } from "../constants/content";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row">
        <span>{CONTENT.footer.copyright}</span>
        <span>{CONTENT.footer.tagline}</span>
      </div>
    </footer>
  );
}

