import { useTransform } from "framer-motion";
import { motionTokens } from "./tokens";

export const useHorizontalParallax = (
    progress,
    direction: "left" | "right" = "right",
    distance = motionTokens.distance.xl
) => {
    const factor = direction === "left" ? -1 : 1;

    return useTransform(
        progress,
        [0, 1],
        [distance * factor, -distance * factor]
    );
};