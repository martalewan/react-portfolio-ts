import lemon from "../../assets/designArchive/icons/lemon.svg";
import halfLemon from "../../assets/designArchive/icons/half-lemon.svg";

export default function About() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center" id="about">

            <div className="max-w-177.5 pr-11.25 mb-15">

                <h1 className="font-[Playfair_Display] text-[36px] md:text-[56px] mb-8.25">
                    Passionate graphic designer & full-stack developer
                </h1>

                <p className="mb-6.25 text-inherit">
                    I'm a graphic designer, art director and front end developer based in Paris.
                    I am passionate about visually appealing design, handcrafted print, digital implementations and coding. I believe in eco-sustainable design and that less is more. I use nature as an endless and main source of ideas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-[12px] md:text-[16px]">

                    <ul>
                        <h4 className="pb-5">Services</h4>

                        <li>Visual Identity</li>
                        <li>Art Direction</li>
                        <li>Editorial Design</li>
                        <li>Print Production</li>
                    </ul>

                    <ul>
                        <li>Website Design</li>
                        <li>Mobile Design</li>
                        <li>Illustration</li>
                        <li>Photography</li>
                        <li>Web Development</li>
                        <li>Html/CSS</li>
                    </ul>

                    <ul className="sm:col-span-2 lg:col-span-1">
                        <h4 className="pb-5">Awards</h4>

                        <li>Hackyeah - 1st place 2019</li>
                    </ul>

                </div>

                <img
                    src={lemon}
                    className="hidden lg:block lg:absolute h-50 top-30 right-45"
                />

                <img
                    src={halfLemon}
                    className="hidden lg:block lg:absolute h-50 top-80 right-6"
                />

            </div>

            <a href="#contact" className="absolute bottom-5">More?</a>
        </section>
    );
}