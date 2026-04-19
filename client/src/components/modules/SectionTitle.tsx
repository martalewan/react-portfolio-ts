type SectionTitle = {
    label: string,
    title: string,
    subtitle: string,
}

const SectionTitle = ({ label, title, subtitle }: SectionTitle) => {
    return (

        <div className="relative flex flex-col items-start gap-2 mt-40 mb-20">

            <span className="text-xs tracking-widest text-(--color-text-muted) uppercase">
                {subtitle}
            </span>
            <h2 className="tracking-tight">
                <span className="text-neon-flicker numero-font ">{label}</span>
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle