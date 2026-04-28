import { Routes, Route } from "react-router-dom";
import FrontendPage from "../routes/FrontendPage";
import DesignPage from "../routes/DesignPage";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<FrontendPage />} />
            <Route path="/design" element={<DesignPage />} />
        </Routes>
    );
}