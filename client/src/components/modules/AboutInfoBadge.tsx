type AboutInfoBadgeProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
};

const AboutInfoBadge = ({ icon: Icon, title, description }: AboutInfoBadgeProps) => {
    return (
        <div className="flex flex-col items-start badge">
            <div className="flex items-center gap-3 mb-3">
                <Icon className="w-4 h-4 text-accent" />
                <h4>{title}</h4>
            </div>

            <p className="text-sm">
                {description}
            </p>
        </div>
    );
}

export default AboutInfoBadge