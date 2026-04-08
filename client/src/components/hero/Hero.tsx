import profil from "../../assets/profil.png";

const Hero = () => {
    return (
        <section id="home" className="flex min-h-screen pt-30 text-white bg-gray-900">
            <div className="container mx-auto ">
                <div className="flex flex-col mx-auto xl:flex-row justify-between items-center px-24">
                    <div className="flex flex-col gap-3 text-center xl:text-left">
                        <span>Frontend Developer</span>
                        <h1>Bonjour, I'm <br />
                            <span className="bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                                Marta Lewandowska</span> </h1>
                        <p className="max-w-[550px]">Frontend Engineer with 4+ years of experience building scalable, accessible web applications using <span className="font-bold">React</span> and  <span className="font-bold">TypeScript</span>. I focus on turning design systems into high-quality, performant user experiences with strong attention to detail.</p>
                    </div>
                    <div>
                        <img src={profil} alt="Portrait" className='w-60' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero;