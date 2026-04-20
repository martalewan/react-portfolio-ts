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
        <div className="h-full flex group">
            <div className="badge py-5 px-6 flex flex-col items-start gap-6 transition duration-300">
                <div className="flex gap-2 justify-between w-full">
                    <div className="space-y-1">
                        <h4 className="text-text group-hover:text-text transition">
                            {item.role}
                        </h4>

                        <p className="text-text-80 text-sm">
                            {item.company} · {item.location}
                        </p>
                    </div>

                    <div className="shrink-0">
                        <div className="px-3 py-1 border border-border-15 text-xs text-text-80 group-hover:border-accent group-hover:text-accent transition whitespace-nowrap">
                            {item.period}
                        </div>
                    </div>
                </div>
                {item.description && (
                    <p className="text-sm text-text-80 mt-2">
                        {item.description}
                    </p>
                )}

            </div>
        </div>
    );
};

export default ExperienceItem;