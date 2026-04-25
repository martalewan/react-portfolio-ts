import type { IconType } from "react-icons";
import Tooltip from "../../ui/Tooltip";

type Props = {
    item: {
        role: string;
        company: string;
        location: string;
        period: string;
        type: string;
        description?: string;
        details?: string;
        tech?: {
            icon: IconType;
            name: string;
        }[];
    };
};

const ExperienceItem = ({ item }: Props) => {
    return (
        <div className="ui-elevated flex flex-col gap-6 p-5 transition duration-300 group">

            {/* TOP SECTION */}
            <div className="flex justify-between w-full gap-2">
                <div className="space-y-1">

                    <h4 className="text-text text-sm">
                        {item.role}
                    </h4>

                    <p className="text-sm text-text-40">
                        <span className="group-hover:text-accent transition-colors">
                            {item.company}
                        </span>
                        {" · "}
                        <span className="group-hover:text-accent transition-colors">
                            {item.location}
                        </span>
                    </p>

                </div>

                <div className="shrink-0">
                    <div className="px-3 py-1 border border-border-15 text-xs text-text-80 whitespace-nowrap">
                        {item.period}
                    </div>
                </div>
            </div>

            {item.description && (
                <p className="text-sm">
                    {item.description}
                </p>
            )}

            {item.details && (
                <p className="text-xs text-text-40 leading-relaxed">
                    {item.details}
                </p>
            )}

            {item.tech && (
                <div className="flex gap-3 pt-2 text-text-60 group-hover:text-accent">
                    {item.tech.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                            <Tooltip key={i} content={tech.name}>
                                <Icon className="text-lg transition-transform duration-200 hover:scale-110" />
                            </Tooltip>
                        );
                    })}
                </div>
            )}

        </div>
    );
};

export default ExperienceItem;