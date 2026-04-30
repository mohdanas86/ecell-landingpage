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
        <section className="relative flex flex-col items-center justify-center gap-4 overflow-hidden px-3 py-6 sm:gap-6 sm:px-8 sm:py-[52px] lg:border-l lg:border-r lg:border-white/5 reveal delay-2">
            <div className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="absolute left-1/2 top-6 h-32 w-32 -translate-x-1/2 rounded-full bg-[#c94f1e]/20 blur-3xl sm:h-40 sm:w-40" />
                <div className="absolute bottom-6 left-8 h-20 w-20 rounded-full bg-white/10 blur-2xl sm:h-24 sm:w-24" />
                <div className="absolute bottom-10 right-8 h-24 w-24 rounded-full bg-white/5 blur-2xl sm:h-28 sm:w-28" />
            </div>
            <div className="pointer-events-none absolute inset-0 hidden sm:block">
                <span className="absolute left-6 top-10 lg:left-10 lg:top-12 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Incubation Cell
                </span>
                <span className="absolute right-6 top-24 lg:right-10 lg:top-14 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Founder Mentorship
                </span>
                <span className="absolute bottom-16 left-10 lg:left-12 lg:bottom-14 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Rapid Prototyping
                </span>
                <span className="absolute bottom-20 right-12 lg:right-14 lg:bottom-10 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Demo Days
                </span>
            </div>

            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                    Build. Mentor. Launch.
                </p>
                <p className="mt-2 text-sm text-white/70">
                    Incubation gallery of founders, teams, and demo days.
                </p>
            </div>

            <div className="w-full max-w-[680px] h-[180px] sm:h-[230px] lg:h-[240px]">
                <ImageSlider3D
                    images={images.map((image) => image.src)}
                    cardAspectRatio="16/9"
                    cardWidth="clamp(120px, 58vw, 280px)"
                    containerClassName="h-full"
                />
            </div>

            <div className="w-full max-w-[620px] rounded-2xl border border-white/10 bg-white/5 py-6 text-center">
                <p className="font-[var(--font-bebas-neue),var(--font-barlow-condensed),sans-serif] text-[clamp(1.4rem,2.4vw,2rem)] font-normal uppercase tracking-wider leading-[0.95] text-[#f5f5f0]">
                    Stay Ahead of Trends
                    and Technology
                </p>
            </div>
        </section>
    );
}
