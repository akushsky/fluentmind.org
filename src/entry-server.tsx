/* eslint-disable react-refresh/only-export-components -- server entry, no fast refresh */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import "./i18n";
import { AppRoutes } from "./App.tsx";

export { PAGE_META, SITE_URL } from "./seo/routes";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
