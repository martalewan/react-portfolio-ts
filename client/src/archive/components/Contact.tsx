import profilPicture from "../../assets/designArchive/marta profil1.jpg";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative min-h-screen flex flex-col justify-center text-archive-text"
        >
            <div className="flex gap-10 items-start">

                <img
                    src={profilPicture}
                    className="max-w-100 object-cover"
                    alt="Profile"
                />

                <div>

                    {/* FULL TEXT */}
                    <p className="text-archive-text leading-relaxed">
                        My creative journey began in Paris, where I studied general art and Graphic Design. I had the
                        opportunity to work with talented people all over the world. At first I worked as a freelancer
                        for agencies and international clients{" "}
                        <span className="italic">
                            (Lula MAG, Yves Saint Laurent, Sofar Festival, Ekimedia, Cuisin et Vin de France, MPA MAG,
                            Caribbean Line and more).
                        </span>{" "}
                        In 2019, I came back to my hometown Warsaw, where I worked for the Danish company{" "}
                        <span className="italic">Demant.</span>{" "}
                        Besides that, I worked with clients of my choice{" "}
                        <span className="italic">
                            (Antoina Poppy, unpacking design, SEZONmag, PopTown, La Boutique de l'entrepreneur and others).
                        </span>{" "}
                        In 2019, I started programming to supplement my professional skills. I am currently living in Sweden,
                        where I am looking for new inspirations and challenges.
                    </p>

                    <h1 className="text-[56px] mt-10 font-[Playfair_Display] text-archive-text-inverse">
                        Let's work together!
                    </h1>

                    <p className="mt-5 text-archive-text leading-relaxed">
                        Feel free to reach out if you wanna collaborate with me or simply have a chat.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex justify-between mt-10 text-archive-text">

                        <div>
                            <h4 className="mb-6 font-medium">You can find me on</h4>
                            <a href="https://instagram.com" target="_blank" className="block hover:underline">
                                Instagram
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="block hover:underline">
                                LinkedIn
                            </a>
                        </div>

                        <div>
                            <h4 className="mb-6 font-medium">I am available at</h4>
                            <a
                                href="mailto:mlewan.design@gmail.com"
                                className="hover:underline"
                            >
                                mlewan.design@gmail.com
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}