"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
    className?: string;
    quantity?: number;
    ease?: number;
    color?: string;
    refresh?: boolean;
}

export function Particles({
    className = "",
    quantity = 100,
    ease = 80,
    color = "#ffffff",
    refresh = false,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
            size: number;
        }> = [];

        for (let i = 0; i < quantity; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * (ease / 100),
                vy: (Math.random() - 0.5) * (ease / 100),
                alpha: Math.random() * 0.5 + 0.2,
                size: Math.random() * 1 + 1,
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                ctx.globalAlpha = particle.alpha;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [quantity, ease, color, refresh]);

    return (
        <canvas
            ref={canvasRef}
            className={`block w-full h-full ${className}`}
            style={{
                display: "block",
            }}
        />
    );
}
