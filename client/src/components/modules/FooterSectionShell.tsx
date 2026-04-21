type SectionShellProps = {
    data: {
        title?: string;
        description: string;
    };
    children: React.ReactNode;
};

const FooterSectionShell = ({ data, children }: SectionShellProps) => {
    const { title, description } = data;

    return (
        <div className="flex flex-col gap-6">
            {title && (
                <h3 className="text-base md:text-lg tracking-tight">
                    {title}
                </h3>
            )}

            {description && (
                <p className="text-sm text-text-80 leading-relaxed mb-1">
                    {description}
                </p>
            )}

            {children}
        </div>)
}

export default FooterSectionShell