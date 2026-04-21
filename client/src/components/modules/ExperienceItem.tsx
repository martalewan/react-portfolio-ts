type Props = {
    item: {
        role: string;
        company: string;
        location: string;
        period: string;
        type: string;
        description?: string;
    };
};
const ExperienceItem = ({ item }: Props) => {
    return (
        <div className="ui-elevated gap-6 p-6 transition duration-300 group">

            <div className="flex justify-between w-full gap-2">
                <div className="space-y-1">

                    <h4 className="text-text">
                        {item.role}
                    </h4>

                    <p className="text-sm">
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
        </div>
    );
};

export default ExperienceItem;