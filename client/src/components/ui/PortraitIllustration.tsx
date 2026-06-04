import portrait from "../../assets/portrait.svg";

const PortraitIllustration = () => {
    return (
        <div className="relative flex justify-center items-center group w-50 h-auto">

            <img
                src={portrait}
                draggable={false}
                className="invert brightness-0 blur-md opacity-20 absolute scale-110 pointer-events-none 
                   transition duration-500 ease-out
                   group-hover:scale-110 group-hover:opacity-40 group-hover:blur-xl"
                alt="Portrait Illustration"
                loading="lazy"
            />

            <img
                src={portrait}
                draggable={false}
                className="invert brightness-0 blur-sm opacity-30 absolute scale-105 pointer-events-none 
                   transition duration-500 ease-out
                   group-hover:scale-105 group-hover:opacity-50 group-hover:blur-md"
                alt="Portrait Illustration"
                loading="lazy"
            />

            <img
                src={portrait}
                draggable={false}
                className="invert brightness-0 relative"
                alt="Portrait Illustration"
                loading="lazy"
            />
        </div>
    )
}

export default PortraitIllustration