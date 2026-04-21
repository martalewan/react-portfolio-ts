import { ABOUT_HIGHLIGHTS } from "../../data/aboutData";
import NeonFrame from "./NeonFrame";

const AboutHighlights = () => {
    return (
        <div className="layout-grid-zigzag">
            {ABOUT_HIGHLIGHTS.map((item) => (
                <div key={item.id} className="layout-item-zigzag">
                    <NeonFrame>
                        <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-accent" />
                            <h4>{item.title}</h4>
                        </div>

                        <p className="mt-4">
                            {item.text}
                        </p>
                    </NeonFrame>
                </div>
            ))}
        </div>
    );
};

export default AboutHighlights;