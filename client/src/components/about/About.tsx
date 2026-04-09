const About = () => {
    return (
        <section id="about" className="flex flex-col gap-8 min-h-screen text-white bg-gray-900 px-28 pt-20">
            <h2 className="">About</h2>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg p-8  ">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-400 via-teal-400 to-pink-500 rounded-3xl opacity-20 blur-2xl"></div>
                <h2 className="text-2xl font-bold text-white mb-4">Who I am?</h2>

                <div className="flex relative gap-14 z-10">
                    <div>
                        <p className="text-white/80">
                            <p className="mb-6">
                                When I’m not coding, I love bringing interfaces to life with animations, microinteractions, and thoughtful design touches. My background in graphic design gives me a strong eye for aesthetics, layout, and color, which I combine with frontend development to craft polished and engaging digital experiences.
                            </p>
                            <p className="mb-6">
                                I enjoy building clean, maintainable code that balances functionality, performance, and user experience. Working with technologies like React, TypeScript, and GraphQL, I tackle challenging problems, optimize applications, and experiment with animations, interactive components, and design systems to push the boundaries of what a web application can feel like.
                            </p>
                            <p className="mb-6">
                                Outside of work, I’m a former cellist, and music still inspires my creativity. I stay active by playing tennis, practicing chess, and learning new languages. These hobbies feed my curiosity and problem-solving skills, which I bring into my coding projects. I love collaborating with designers, product managers, and engineers to transform ideas into functional, beautiful, and user-friendly applications. Coding, for me, is about crafting experiences that delight users and leave a lasting impression.
                            </p>
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">

                        <p className="text-white/80">
                            <span className="font-bold">Availability:</span> <br /> Full-Time & Freelance
                        </p>

                        <p className="text-white/80">
                            <span className="font-bold">City:</span> <br />Paris
                        </p>

                        <p className="text-white/80">
                            <span className="font-bold">Birthplace:</span> <br />Warsaw, Poland
                        </p>

                        <p className="text-white/80">
                            <span className="font-bold">Email:</span> <a href="mailto:mlewan.desigm@gmail.com" className="text-accent hover:underline"><br />mlewan.desigm@gmail.com</a>
                        </p>
                    </div>

                </div>
            </div>


        </section >
    )
}

export default About