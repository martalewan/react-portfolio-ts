const getWidth = (level: string) => {
    switch (level) {
        case "Expert":
            return "100%";
        case "Advanced":
            return "80%";
        case "Intermediate":
            return "60%";
        default:
            return "40%";
    }
};

const SkillCard = ({ skill }) => {
    const Icon = skill.icon;

    return (
        <div className="ui-elevated group">
            <div className="flex w-full gap-2">
                <div className="text-text-80 group-hover:text-accent transition-colors">
                    <Icon />
                </div>

                <span className="text-xs text-text">
                    {skill.name}
                </span>
            </div>
            <div className="w-full space-y-2">
                <div className="w-full h-0.5 bg-bg-inverse-15 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-bg-inverse transition-all duration-500"
                        style={{ width: getWidth(skill.level) }}
                    />
                </div>

                <div className="flex justify-between w-full text-xs text-text-40">
                    <span>{skill.level}</span>
                    <span>+ {skill.years} years</span>
                </div>
            </div>

        </div>
    );
};

export default SkillCard;