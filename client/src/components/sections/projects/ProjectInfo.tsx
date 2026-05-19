type ProjectInfoProps = {
    project: {
        id: string;
        title: string;
        techStack: string[];
        description: string;
        link?: string;
    };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">

            <div>
                <h3 className="pb-4 md:pb-5">
                    {project.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((t) => (
                        <span key={t} className="ui-elevated text-xs">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-text-80">
                    {project.description}
                </p>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block mt-5 text-sm underline underline-offset-4 hover:opacity-60 transition cursor-pointer ${project.id === "asteroid-game"
                                ? "hidden md:inline-block"
                                : ""
                            }`}
                    >
                        View project
                    </a>
                )}
            </div>


        </div>
    );
};

export default ProjectInfo;