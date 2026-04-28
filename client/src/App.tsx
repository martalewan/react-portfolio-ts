import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "./animations";
import FrontendPage from "./pages/FrontendPage";
import DesignPage from "./pages/DesignPage";

const Page = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page>
              <FrontendPage />
            </Page>
          }
        />
        <Route
          path="/design"
          element={
            <Page>
              <DesignPage />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}