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
        <div className="relative group">
            <div className="py-5 px-6 flex items-start justify-between gap-1 badge transition duration-300 ">

                <div>
                    <h4 className="text-(--secondary-color)/80 group-hover:text-white/90 transition">
                        {item.role}
                    </h4>

                    <p className="text-(--secondary-color)/60 text-sm">
                        {item.company} · {item.location}
                    </p>

                    {item.description && (
                        <p className="text-sm text-(--secondary-color)/50 mt-2">
                            {item.description}
                        </p>
                    )}
                </div>

                <div className="absolute right-5">

                    <div className="px-3 py-1 border border-white/10 text-xs text-(--secondary-color)/70 group-hover:border-cyan-400/30 group-hover:text-(--accent-color) transition">
                        {item.period}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;