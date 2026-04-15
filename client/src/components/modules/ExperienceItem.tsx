type Props = {
    item: {
        position: string;
        place: string;
        years: string;
    };
};

const ExperienceItem = ({ item }: Props) => {
    return (
        <div className="relative pl-10 group">

            <div className="absolute left-[-3.5px] top-1/2 -translate-y-1/2 w-2 h-2">

                <span className="absolute w-2 h-2 rounded-full bg-(--secondary-color)" />
                <span className="absolute w-2 h-2 rounded-full bg-(--secondary-color) animate-ping opacity-80" />

            </div>

            <div className="flex items-start justify-between p-4 rounded-md border border-(--secondary-color)/10 bg-(--secondary-color)/5 group-hover:bg-(--secondary-color)/10 transition">

                <div>
                    <h4 className="text-(--secondary-color)/80">
                        {item.position}
                    </h4>
                    <p className="text-(--secondary-color)/60 text-sm">
                        {item.place}
                    </p>
                </div>

                <div className="px-3 py-1 rounded-full border border-(--secondary-color)/15 text-xs text-(--secondary-color)/70">
                    {item.years}
                </div>

            </div>
        </div>
    );
};

export default ExperienceItem;