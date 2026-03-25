import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import StickyMobileCTA from "./StickyMobileCTA";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
      <StickyMobileCTA />
    </div>
  );
}
