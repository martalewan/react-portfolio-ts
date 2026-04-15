const AboutContent = () => {
    return (
        <div>

            <p className="mb-6 text-(--secondary-color)/70 leading-7">
                I am a Frontend Engineer with 4+ years of experience building scalable,
                accessible web applications using React and TypeScript. I specialize in
                clean, modular architecture and modern UI systems.
            </p>

            <p className="mb-10 text-(--secondary-color)/70 leading-7">
                Outside of coding, I’m a former cellist and graphic designer, which
                influences my creative approach. I also enjoy tennis, chess, and learning
                new languages.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

                <p className="text-(--secondary-color)/60">
                    Name:<br />
                    <span className="text-(--secondary-color)">
                        Marta Lewandowska
                    </span>
                </p>

                <p className="text-(--secondary-color)/60">
                    Based in:<br />
                    <span className="text-(--secondary-color)">
                        Paris, France
                    </span>
                </p>

                <p className="text-(--secondary-color)/60">
                    Availability:<br />
                    <span className="text-(--secondary-color)">
                        Full-Time & Freelance
                    </span>
                </p>

                <p className="text-(--secondary-color)/60">
                    Email:<br />
                    <a
                        href="mailto:mlewan.design@gmail.com"
                        className="hover:text-(--accent-color) transition"
                    >
                        mlewan.design@gmail.com
                    </a>
                </p>

            </div>
        </div>
    );
};

export default AboutContent;