import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const FrontendPage = lazy(() => import("../routes/FrontendPage"));
const DesignPage = lazy(() => import("../routes/DesignPage"));

export default function Router() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<FrontendPage />} />
                <Route path="/design" element={<DesignPage />} />
            </Routes>
        </Suspense>
    );
}