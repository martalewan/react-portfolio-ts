import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Router from "./router";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Router key={location.pathname} />
    </AnimatePresence>
  );
}