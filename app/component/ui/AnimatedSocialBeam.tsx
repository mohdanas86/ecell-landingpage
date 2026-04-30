"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { AnimatedBeam } from "@/app/component/ui/animated-beam";
import {
    FaDiscord,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anas86",
        Icon: FaLinkedin,
        color: "#0077B5",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/_anas__86",
        Icon: FaInstagram,
        color: "#E4405F",
    },
    {
        name: "YouTube",
        url: "https://youtube.com/c/AG4444YT",
        Icon: FaYoutube,
        color: "#FF0000",
    },
    {
        name: "X",
        url: "https://x.com",
        Icon: FaXTwitter,
        color: "#ffffff",
    },
    {
        name: "Facebook",
        url: "https://facebook.com",
        Icon: FaFacebook,
        color: "#1877F2",
    },
    {
        name: "Discord",
        url: "https://discord.com",
        Icon: FaDiscord,
        color: "#5865F2",
    },
];

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-10 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_16px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    );
});
Circle.displayName = "Circle";

export function AnimatedSocialBeam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const linkedinRef = useRef<HTMLDivElement>(null);
    const instagramRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const youtubeRef = useRef<HTMLDivElement>(null);
    const xRef = useRef<HTMLDivElement>(null);
    const facebookRef = useRef<HTMLDivElement>(null);
    const discordRef = useRef<HTMLDivElement>(null);

    const LinkedInIcon = socialLinks[0].Icon;
    const InstagramIcon = socialLinks[1].Icon;
    const YouTubeIcon = socialLinks[2].Icon;
    const XIcon = socialLinks[3].Icon;
    const FacebookIcon = socialLinks[4].Icon;
    const DiscordIcon = socialLinks[5].Icon;

    return (
        <div
            className="relative flex h-[150px] w-full items-center justify-center overflow-hidden p-4"
            ref={containerRef}
        >
            <div className="relative z-10 grid h-full max-h-[180px] w-full max-w-md grid-cols-[1fr_auto_1fr] grid-rows-3 items-center gap-x-6 gap-y-4">
                <Link
                    href={socialLinks[0].url}
                    target="_blank"
                    className="group justify-self-start"
                    aria-label={socialLinks[0].name}
                >
                    <Circle ref={linkedinRef}>
                        <LinkedInIcon className="text-xl text-gray-700 group-hover:text-[#0077B5] transition-colors" />
                    </Circle>
                </Link>
                <div />
                <Link
                    href={socialLinks[3].url}
                    target="_blank"
                    className="group justify-self-end"
                    aria-label={socialLinks[3].name}
                >
                    <Circle ref={xRef}>
                        <XIcon className="text-xl text-gray-700 group-hover:text-black transition-colors" />
                    </Circle>
                </Link>

                <Link
                    href={socialLinks[1].url}
                    target="_blank"
                    className="group justify-self-start"
                    aria-label={socialLinks[1].name}
                >
                    <Circle ref={instagramRef}>
                        <InstagramIcon className="text-xl text-gray-700 group-hover:text-[#E4405F] transition-colors" />
                    </Circle>
                </Link>
                <div ref={centerRef} className="relative z-20 justify-self-center">
                    <div className="flex size-12 items-center justify-center rounded-full border-2 border-white/20 bg-[#1A1A1A] p-2 shadow-[0_0_20px_-10px_rgba(0,0,0,0.8)]">
                        <Image
                            src="/favicon.png"
                            alt="E-Cell"
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                        />
                    </div>
                </div>
                <Link
                    href={socialLinks[2].url}
                    target="_blank"
                    className="group justify-self-end"
                    aria-label={socialLinks[2].name}
                >
                    <Circle ref={youtubeRef}>
                        <YouTubeIcon className="text-xl text-gray-700 group-hover:text-[#FF0000] transition-colors" />
                    </Circle>
                </Link>

                <Link
                    href={socialLinks[5].url}
                    target="_blank"
                    className="group justify-self-start"
                    aria-label={socialLinks[5].name}
                >
                    <Circle ref={discordRef}>
                        <DiscordIcon className="text-xl text-gray-700 group-hover:text-[#5865F2] transition-colors" />
                    </Circle>
                </Link>
                <div />
                <Link
                    href={socialLinks[4].url}
                    target="_blank"
                    className="group justify-self-end"
                    aria-label={socialLinks[4].name}
                >
                    <Circle ref={facebookRef}>
                        <FacebookIcon className="text-xl text-gray-700 group-hover:text-[#1877F2] transition-colors" />
                    </Circle>
                </Link>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={linkedinRef}
                toRef={centerRef}
                curvature={-30}
                startYOffset={-6}
                endYOffset={-8}
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={instagramRef}
                toRef={centerRef}
                curvature={0}
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={xRef}
                toRef={centerRef}
                curvature={30}
                startYOffset={-6}
                endYOffset={-8}
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={youtubeRef}
                toRef={centerRef}
                curvature={0}
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={discordRef}
                toRef={centerRef}
                curvature={30}
                startYOffset={6}
                endYOffset={8}
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={facebookRef}
                toRef={centerRef}
                curvature={-30}
                startYOffset={6}
                endYOffset={8}
                className="z-0"
            />
        </div>
    );
}

