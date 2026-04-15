type ProjectInfoProps = {
    project: {
        title: string;
        techStack: string[];
        description: string;
    };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <h3 className="pb-5">{project.title}</h3>
                <div className="flex gap-5">
                    {project.techStack.map((t) => (
                        <span key={t} className="badge"
                        >{t}</span>
                    ))}
                </div>
            </div>
            <div>
                <p>{project.description}</p>
            </div>


        </div>
    );
};

export default ProjectInfo;