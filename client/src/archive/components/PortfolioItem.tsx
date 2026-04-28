export default function PortfolioItem({ img, id }) {
    const handleClick = (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        console.log(el, id)

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div onClick={handleClick} className="relative block group cursor-pointer">
            <img src={img} className="w-full" alt="" />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/50 transition duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition duration-300">
                    View details
                </span>
            </div>
        </div>
    );
}