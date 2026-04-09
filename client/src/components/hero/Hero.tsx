import profil from "../../assets/profil.png";
import ActionButton from "../actionButton/ActionButton";

const Hero = () => {
    return (
        <section id="home" className="flex min-h-screen text-white bg-gray-900">
            <div className="container mx-auto items-center">
                <div className="flex flex-col gap-7 xl:flex-row justify-center xl:justify-between items-center px-24 h-full">
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none">
                        <span>Frontend Developer</span>
                        <h1 className="mb-6">Hello, I am <br />
                            <span className="bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                                Marta Lewandowska</span> </h1>
                        <p className="max-w-[550px] mb-6">Frontend Engineer with 4+ years of experience building scalable, accessible web applications using <span className="font-bold">React</span> and  <span className="font-bold">TypeScript</span>. I focus on turning design systems into high-quality, performant user experiences with strong attention to detail.</p>
                        <ActionButton text="Download my CV" />
                    </div>
                    <div className="mix-blend-lighten">
                        <img src={profil} alt="Portrait" className='w-60 xl:w-110' />
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Hero;