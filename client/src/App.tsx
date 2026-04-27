import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignArchive from "./pages/DesignArchive";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design" element={<DesignArchive />} />
    </Routes>
  );
};

export default App;