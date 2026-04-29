import ImageSlider3D from "../ui/image-slider-3d";

export function PanelCenter() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D",
            alt: "Corporate event 1",
        },
        {
            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Corporate event 2",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661277712617-1e46eac647e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D",
            alt: "Corporate event 3",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D",
            alt: "Corporate event 4",
        },
        {
            src: "https://images.pexels.com/photos/29708234/pexels-photo-29708234.jpeg",
            alt: "E-Cell event",
        },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center gap-6 border-l border-r border-white/5 px-8 py-[52px] reveal delay-2">
            <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-6 top-10 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Incubation Cell
                </span>
                <span className="absolute right-6 top-24 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Founder Mentorship
                </span>
                <span className="absolute bottom-16 left-10 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Rapid Prototyping
                </span>
                <span className="absolute bottom-20 right-12 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Demo Days
                </span>
            </div>

            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                    Build. Mentor. Launch.
                </p>
            </div>

            <div className="w-full max-w-[680px] h-[220px] sm:h-[260px] lg:h-[200px]">
                <ImageSlider3D
                    images={images.map((image) => image.src)}
                    cardAspectRatio="16/9"
                    cardWidth="clamp(160px, 24vw, 280px)"
                    containerClassName="h-full"
                />
            </div>
        </section>
    );
}
