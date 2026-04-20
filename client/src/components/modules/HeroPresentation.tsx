import { FiDownload } from "react-icons/fi";
import Button from "../ui/Button";
import Socials from "../modules/Socials";
import { Link } from "react-scroll";
import { HERO_DATA } from "../../data/heroData";

const HeroPresentation = () => {
    const { subtitle, name, description, cvFile, actions } = HERO_DATA;

    return (
        <div className="flex flex-col items-center gap-6 xl:items-start text-center xl:text-left order-2 xl:order-0">
            <div>
                <span className="section-subtitle">
                    {subtitle}
                </span>

                <h1>
                    <span className="hidden md:block">
                        Hi, I am
                    </span>
                    <span className="text-neon-flicker">
                        {name}
                    </span>
                </h1>
            </div>

            <p className="max-w-137.5 p-large">
                {description}
            </p>

            <div className="flex flex-col gap-6 w-full max-w-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={cvFile} download>
                        <Button text={actions.downloadLabel} icon={FiDownload} />
                    </a>

                    <Link to="contact" smooth duration={500}>
                        <Button text={actions.contactLabel} variant="secondary" />
                    </Link>
                </div>

                <Socials
                    wrapperStyles="flex gap-8 justify-center xl:justify-start w-full"
                    iconsStyles="flex items-center justify-center border border-(--color-text-muted) rounded-full p-2 w-9 h-9"
                />
            </div>
        </div>
    );
};

export default HeroPresentation;