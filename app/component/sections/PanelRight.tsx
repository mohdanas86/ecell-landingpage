import { AnimatedSocialBeam } from "@/app/component/ui/AnimatedSocialBeam";

export function PanelRight() {
    return (
        <section className="flex flex-col overflow-hidden bg-[#1a1a1a] p-0 reveal delay-3">
            {/* Advantages Section */}
            <div className="border-b border-white/10 px-9 py-10">
                <p className="mb-1.5 text-sm italic text-[#8f8f8f]">
                    Open from 09:00 to 18:30
                </p>
                <h2 className="mb-4 text-[2rem] font-bold leading-none text-[#f5f5f0]">
                    Our Advantages
                </h2>
                <p className="text-base leading-relaxed text-[#aaaaaa]">
                    <strong className="text-[#f5f5f0] font-semibold">Idea to Production</strong> |{" "}
                    <strong className="text-[#f5f5f0] font-semibold">Flexible Timings</strong> |{" "}
                    <strong className="text-[#f5f5f0] font-semibold">Attendance Protection (OD)</strong> |{" "}
                    <strong className="text-[#f5f5f0] font-semibold">Internship Opportunities</strong>
                </p>
            </div>

            {/* Photo Block */}
            <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b border-t border-white/10 bg-[#2a2a2a] text-xs uppercase tracking-widest text-white/20">
                {/* Diagonal stripe pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255, 255, 255, 0.03) 12px, rgba(255, 255, 255, 0.03) 24px)",
                    }}
                />

                <div className="relative z-10 flex flex-col items-center gap-1.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded border border-white/20 text-xs tracking-wider">
                        PHOTO
                    </div>
                    <span>Team + Events Gallery</span>
                </div>
            </div>

            {/* Socials Section */}
            <div className="border-b border-white/10 px-9 py-7">
                <h2 className="mb-[18px] text-[1.8rem] font-bold leading-none text-[#f5f5f0]">
                    Visit Our Socials
                </h2>

                {/* Animated Beam Component */}
                <div>
                    <AnimatedSocialBeam />
                </div>
            </div>

            {/* Tagline Banner */}
            <div className="mt-auto bg-[#111111] px-9 py-7">
                <p className="font-[var(--font-bebas-neue),var(--font-barlow-condensed),sans-serif] text-[clamp(1.5rem,2.5vw,2.5rem)] font-normal uppercase tracking-wider leading-[0.95] text-[#f5f5f0]">
                    Stay Ahead of Trends
                    <br />
                    and Technology
                </p>
            </div>
        </section>
    );
}
