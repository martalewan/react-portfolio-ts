import { FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa";


type SocialsProps = {
    wrapperStyles: string;
    iconsStyles: string;
};

const socialsData = [
    {
        icon: <FaGithub />,
        url: ""
    },
    {
        icon: <FaLinkedinIn />,
        url: ""
    },
    {
        icon: <FaInstagram />,
        url: ""
    },
];
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