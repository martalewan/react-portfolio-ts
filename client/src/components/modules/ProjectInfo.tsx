type ProjectInfoProps = {
    project: {
        title: string;
        techStack: string[];
        description: string;
    };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
    return (
        <div>
            <h3>{project.title}</h3>

            <div>
                {project.techStack.map((t) => (
                    <span key={t}>{t}</span>
                ))}
            </div>

            <p>{project.description}</p>
        </div>
    );
};

export default ProjectInfo;