import portrait from "../../assets/portrait.svg";

const HeroPortrait = () => {
    return (
        <div className="relative flex justify-center items-center w-[clamp(4rem,8vw,16rem)] xl:w-[clamp(12rem,16vw,18rem)] group">

            <img
                src={portrait}
                draggable={false}
                className="invert brightness-0 blur-md opacity-20 absolute scale-110 pointer-events-none 
                   transition duration-500 ease-out
                   group-hover:scale-110 group-hover:opacity-40 group-hover:blur-xl"
            />

            <img
                src={portrait}
                draggable={false}
                className="invert brightness-0 blur-sm opacity-30 absolute scale-105 pointer-events-none 
                   transition duration-500 ease-out
                   group-hover:scale-105 group-hover:opacity-50 group-hover:blur-md"
            />

            <img
                src={portrait}
                alt="Portrait of Marta Lewandowska"
                loading="eager"
                draggable={false}
                className="invert brightness-0 relative"
            />
        </div>
    )
}

export default HeroPortrait