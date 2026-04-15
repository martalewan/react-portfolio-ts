type SectionTitle = {
    label: string,
    title: string,
    subtitle: string,
}

const SectionTitle = ({ label, title, subtitle }: SectionTitle) => {
    return (

        <div className="relative flex flex-col items-start gap-2 pl-10 mt-70 mb-20">
            <div className="absolute left-0 top-1/2 w-6 h-px bg-white/20" />

            <span className="text-xs tracking-widest text-white/30 uppercase">
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