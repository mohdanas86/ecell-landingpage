import { AnimatedSocialBeam } from "@/app/component/ui/AnimatedSocialBeam";
import { CountUp } from "@/app/component/ui/count-up";
import { Highlighter } from "@/components/ui/highlighter";

export function PanelRight() {
    return (
        <section className="relative flex flex-col overflow-hidden bg-[#1a1a1a] p-0 reveal delay-3">
            <div className="pointer-events-none absolute -top-10 right-6 h-32 w-32 rounded-full bg-[#c94f1e]/15 blur-3xl" />
            {/* Advantages Section */}
            <div className="border-b border-white/10 px-9 py-8">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/50">
                    Open from 09:00 to 18:30
                </p>
                <h2 className="mb-4 text-[2rem] font-bold leading-none text-[#f5f5f0]">
                    <Highlighter action="highlight" color="rgba(255, 255, 255, 0.12)">
                        Our Advantages
                    </Highlighter>
                </h2>
                <div className="flex flex-wrap gap-2">
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                            Idea to Production
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                            Flexible Timings
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                            Attendance OD
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                            Internships
                        </span>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-left">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                            Teams
                        </p>
                        <CountUp
                            value={60}
                            suffix="+"
                            duration={2.4}
                            className="justify-start"
                            numberClassName="text-lg font-semibold text-[#fff]"
                        />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                            Mentors
                        </p>
                        <CountUp
                            value={25}
                            suffix="+"
                            duration={2}
                            className="justify-start"
                            numberClassName="text-lg font-semibold text-[#fff]"
                        />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                            Demos
                        </p>
                        <CountUp
                            value={12}
                            suffix="/yr"
                            duration={1.6}
                            className="justify-start"
                            numberClassName="text-lg font-semibold text-[#fff]"
                        />
                    </div>
                </div>
            </div>

            {/* Photo Block */}
            <div className="relative flex h-52 w-full items-center justify-center overflow-hidden border-b border-t border-white/10 bg-[#2a2a2a]">
                <img
                    src="https://images.pexels.com/photos/29708234/pexels-photo-29708234.jpeg"
                    alt="E-Cell team and events"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/10" />
                <div className="absolute bottom-3 left-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    Campus Activation
                </div>
            </div>

            {/* Socials Section */}
            <div className="mt-0 border-white/10 px-9 py-9">
                <h2 className="mb-4 text-[2rem] font-bold leading-none text-[#f5f5f0]">
                    <Highlighter action="underline" color="#FF9800">
                        Connect with
                    </Highlighter>{" "}
                    us online
                </h2>
                <div className="overflow-hidden">
                    <AnimatedSocialBeam />
                </div>
            </div>
        </section>
    );
}
