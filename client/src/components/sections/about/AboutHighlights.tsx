import { ABOUT_HIGHLIGHTS } from "../../../data/aboutData";

const AboutHighlights = () => {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-xs tracking-widest text-text-40 uppercase">
                <span>ABC</span> of coding
            </span>

            <div className="flex flex-col divide-y divide-white/10">
                {ABOUT_HIGHLIGHTS.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-6 min-h-[180px]"
                    >
                        <h1 className="text-[110px] leading-none text-neon-flicker flex-shrink-0">
                            {item.prefix}
                        </h1>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm text-text-40">
                                {item.title}
                            </h4>

                            <p className="text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutHighlights;