import { LuSparkle } from "react-icons/lu";
import { Particles } from "../ui/Particles";

export function PanelCenter() {
    return (
        <section className="flex flex-col items-center justify-center gap-[26px] border-l border-r border-white/5 px-8 py-[52px] reveal delay-2">
            {/* Global Particles Background */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={250}
                ease={50}
                color="#fff"
                refresh
            />
            {/* Logo Mark */}
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-white/10 bg-white/5">
                {/* Inner dashed circle */}
                <div className="absolute inset-3 rounded-full border border-dashed border-white/20" />

                {/* Logo Letter */}
                <span className="relative z-10 font-serif text-[8rem] italic leading-none text-[#f5f5f0] mb-6 rotate-6">
                    e
                </span>

                {/* Logo Burst Icon */}
                <LuSparkle className="absolute bottom-15 right-13 h-7 w-7 text-[#c94f1e] z-20" />
            </div>

            {/* Logo Name */}
            <div className="text-center">
                <div className="text-[2rem] font-bold uppercase tracking-widest text-[#f5f5f0]">
                    SRM<span className="mx-1.5 text-white/30">|</span>
                    <span className="font-normal text-[#8f8f8f]">e-cell</span>
                </div>
                <div className="mt-1.5 text-xs uppercase tracking-[0.18em] text-[#8f8f8f]">
                    IST | Easwari | Dental | SEAD | S&H
                </div>
                <div className="mt-2.5 inline-block bg-[#f5f5f0] px-[14px] py-1.5 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
                    Chennai Ramapuram
                </div>
            </div>
        </section>
    );
}
