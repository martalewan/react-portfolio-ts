import { ABOUT_HIGHLIGHTS } from "../../data/aboutData";
import NeonFrame from "./NeonFrame";

const AboutHighlights = () => {
    return (
        <div className="flex flex-col gap-20">
            {ABOUT_HIGHLIGHTS.map((item) => (
                <div key={item.id}>
                    <NeonFrame>
                        <div className="flex items-center gap-3">
                            <item.icon className="w-7 h-7 text-accent" />
                            <h3>{item.title}</h3>
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