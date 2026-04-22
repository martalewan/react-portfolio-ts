import { socialsData } from "../../data/socialsData";

type SocialsProps = {
    wrapperStyles: string;
    iconsStyles: string;
};

const Socials = ({ wrapperStyles, iconsStyles }: SocialsProps) => {
    return (
        <div className={wrapperStyles}>
            {socialsData.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={iconsStyles}>
                    {social.icon}
                </a>
            ))}
        </div>
    )
}

export default Socials