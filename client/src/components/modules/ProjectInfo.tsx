type ProjectInfoProps = {
    project: {
        title: string;
        techStack: string[];
        description: string;
    };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">

            <div>
                <h3 className="pb-4 md:pb-5">
                    {project.title}
                </h3>

                <div className="flex flex-wrap gap-3 md:gap-5">
                    {project.techStack.map((t) => (
                        <span key={t} className="badge text-sm">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-(--color-text-muted) leading-relaxed">
                    {project.description}
                </p>
            </div>

        </div>
    );
};

export default ProjectInfo;