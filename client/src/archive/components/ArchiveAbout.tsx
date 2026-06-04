import lemon from "../../assets/designArchive/icons/lemon.svg";
import halfLemon from "../../assets/designArchive/icons/half-lemon.svg";

export default function About() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center" id="about">

            <div className="max-w-177.5 pr-11.25 mb-15">

                <h2 className="font-[Playfair_Display] text-[36px] md:text-[56px] mb-8.25">
                    Passionate graphic designer & full-stack developer
                </h2>

                <p className="mb-6.25 text-inherit">
                    I'm a graphic designer, art director and front end developer based in Paris.
                    I am passionate about visually appealing design, handcrafted print, digital implementations and coding. I believe in eco-sustainable design and that less is more. I use nature as an endless and main source of ideas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    <div>
                        <h3 className="pb-5">Services</h3>

                        <ul className="[&_li]:text-[12px] xl:[&_li]:text-[16px]">
                            <li>Visual Identity</li>
                            <li>Art Direction</li>
                            <li>Editorial Design</li>
                            <li>Print Production</li>
                        </ul>
                    </div>
                    <ul className="[&_li]:text-[12px] xl:[&_li]:text-[16px]">
                        <li>Website Design</li>
                        <li>Mobile Design</li>
                        <li>Illustration</li>
                        <li>Photography</li>
                        <li>Web Development</li>
                        <li>Html/CSS</li>
                    </ul>

                    <div>
                        <h3 className="pb-5">Awards</h3>

                        <ul className="[&_li]:text-[12px] xl:[&_li]:text-[16px] sm:col-span-2 lg:col-span-1">

                            <li>Hackyeah - 1st place 2019</li>
                        </ul></div>


                </div>

                <img
                    src={lemon}
                    className="hidden lg:block lg:absolute h-50 top-30 right-45"
                    alt="Lemon illustration"
                    loading="lazy"
                />

                <img
                    src={halfLemon}
                    className="hidden lg:block lg:absolute h-50 top-80 right-6"
                    alt="Lemon illustration"
                    loading="lazy"

                />

            </div>

            <a href="#contact" className="absolute bottom-5">More?</a>
        </section>
    );
}