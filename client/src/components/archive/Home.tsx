import portrait from "../../assets/portrait.svg";
import godownIcon from "../../assets/designArchive/godown.svg";
import { useScrollTo } from "./useScrollTo";

export default function Home() {
    const scrollTo = useScrollTo();

    return (
        <section className="relative flex items-center justify-center min-h-screen" id="home">
            <img src={portrait} className="h-82.5" />

            <div className="absolute bottom-5 flex flex-col items-start w-full">
                <img src={godownIcon} className="w-3.75" />
                <button
                    onClick={() => scrollTo("about")}
                    className="text-left hover:opacity-60 transition"
                >
                    Go down
                </button>
            </div>
        </section>
    );
}