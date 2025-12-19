import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CareersPage from "./pages/Careers";

export default function FluentMindLanding() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
