import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

export function PanelLeft() {
    return (
        <section className="relative overflow-hidden bg-[#1a1a1a] px-10 pb-9 pt-[52px] flex flex-col justify-between reveal delay-1">
            {/* Gradient border left */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#c94f1e] via-[#8b2e0e] to-[#2a0a00]" />

            {/* Radial gradient effect bottom left */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 bg-gradient-radial from-[rgba(201,79,30,0.32)] to-transparent" />
            <div className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-[#c94f1e]/15 blur-3xl" />

            <div className="flex flex-col gap-[30px]">
                <div className="w-full max-w-[420px]">
                    <Image
                        width={840}
                        height={210}
                        src="/logo-removebg-preview.png"
                        alt="E-Cell"
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 420px"
                        className="w-full h-auto object-contain bg-transparent"
                    />
                </div>

                {/* <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Incubation Cell
                </p> */}

                <h1 className="relative z-10 flex flex-col gap-0">
                    <span className="font-[var(--font-bebas-neue),var(--font-barlow-condensed),sans-serif] text-[clamp(2.4rem,5vw,3.5rem)] font-normal tracking-wider leading-[0.9] text-[#f5f5f0] block">
                        WELCOME  TO
                    </span>
                    <span className="font-[var(--font-bebas-neue),var(--font-barlow-condensed),sans-serif] text-[clamp(2.5rem,6vw,4.5rem)] font-normal tracking-wider leading-[0.9] text-[#c94f1e] block">
                        E-CELL
                    </span>
                </h1>

                <p className="relative z-10 max-w-sm text-lg leading-relaxed italic text-[#e8e8e0]">
                    The E-Cell at SRM Ramapuram is a dedicated startup ecosystem built to
                    empower student and alumni founders. We provide incubation support,
                    mentorship, and guidance for hackathon teams to turn ideas into
                    real-world ventures.
                </p>

                <div>
                    <Link href="https://www.ecellrmp.srm.edu.in" target="_blank">
                        <Button
                            className="rounded-full border border-white/10 bg-white/5 px-12 py-2 text-[14px] uppercase tracking-[0.2em] text-white/70 hover:bg-white/10 focus-visible:bg-white/10 transition-colors hover:scale-[1.02] focus-visible:scale-[1.02] active:scale-100 hover:shadow-sm hover:shadow-gray/90 duration-300 cursor-pointer"
                        >

                            <span>Join Us</span>
                            <IoArrowForwardOutline />
                        </Button>
                    </Link>
                </div>

                {/* <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                        Mentorship
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                        Incubation
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                        Demo Days
                    </span>
                </div> */}

            </div>
        </section >
    );
}
