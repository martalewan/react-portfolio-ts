type CarouselIndicatorTypes = {
    images: string[];
    active: number
}

const CarouselIndicator = ({ images, active }: CarouselIndicatorTypes) => {
    return (
        <div className="flex justify-center gap-3">
            {images.map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${active === i ? "bg-bg-inverse-80" : "bg-bg-inverse-15"}`}></span>
            ))}
        </div>)
}

export default CarouselIndicator