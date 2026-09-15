"use client";

import { useState, useEffect, useRef } from "react";
import { lilitaOne, dmSans } from "../fonts";

interface Testimonial {
    name: string;
    role: string;
    game: string;
    initials: string;
    avatarColor: string;
    rating: number;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Aria Kestrel",
        role: "Strategy Game Enthusiast",
        game: "Bean & Debt",
        initials: "AK",
        avatarColor: "#6C4FBF",
        rating: 5,
        quote: "Bean & Debt is an absolute gem. The art style is incredibly charming and the resource management keeps me hooked for hours. Managing debt with fantastical creditors? Pure genius.",
    },
    {
        name: "Leo Vander",
        role: "Game Jam Judge",
        game: "Fox Gotta Eat",
        initials: "LV",
        avatarColor: "#1A6B8A",
        rating: 5,
        quote: "Brilliant execution of a simple concept. The carnival atmosphere is vibrant, the audio design is top-notch, and the risk management element creates real tension. Fox Gotta Eat is a must-play.",
    },
    {
        name: "Kazuki Mori",
        role: "Anime & Tactics Fan",
        game: "Plushie Odyssey",
        initials: "KM",
        avatarColor: "#8E44AD",
        rating: 5,
        quote: "Plushie Odyssey perfectly blends adorable aesthetics with genuinely deep tactical gameplay. The formation system is unique and the anime art style is gorgeous. I can't stop playing.",
    },
    {
        name: "Nadia Kuznetsova",
        role: "Indie Game Blogger",
        game: "Echo Chamber",
        initials: "NK",
        avatarColor: "#922B21",
        rating: 5,
        quote: "The atmosphere in Echo Chamber is unlike anything I've experienced. The eerie visuals paired with the sound-reflection mechanic create a uniquely unsettling and satisfying experience.",
    },
    {
        name: "Tasha Renard",
        role: "Game Jam Enthusiast",
        game: "Path of Lumino",
        initials: "TR",
        avatarColor: "#7B241C",
        rating: 5,
        quote: "Path of Lumino is a stunning student project. The light and shadow mechanics are implemented beautifully, and the atmosphere is wonderfully contemplative. A real standout at GAMESEED 2025.",
    },
    {
        name: "Mia Thornton",
        role: "Relaxation Game Fan",
        game: "Piece By Piece",
        initials: "MT",
        avatarColor: "#6C3483",
        rating: 5,
        quote: "Piece By Piece is exactly what I needed. After a stressful day, sitting down and rebuilding the world one piece at a time is incredibly therapeutic. The art is gorgeous too.",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill={i < rating ? "#BB9B53" : "none"}
                    stroke={i < rating ? "#BB9B53" : "#ffffff25"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Auto-advance every 5s
    useEffect(() => {
        if (!isAutoPlaying) return;
        intervalRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isAutoPlaying]);

    const goTo = (index: number) => {
        setActive(index);
        setIsAutoPlaying(false); // pause auto-play on manual interaction
    };

    const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
    const next = () => goTo((active + 1) % testimonials.length);

    const current = testimonials[active];

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className="section-texture relative w-full bg-[#0d0d0d] py-20 px-6 lg:px-16 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-12" data-aos="fade-up">
                    <h2
                        id="testimonials-heading"
                        className={`${lilitaOne.className} text-white text-3xl lg:text-4xl flex items-center gap-4`}
                    >
                        <img src="/images/lume-gumi-star.png" alt="Star" width={30} />
                        What Players Say
                    </h2>
                    <p className={`${dmSans.className} text-white/40 text-sm mt-3`}>
                        Voices from our community across all games
                    </p>
                </div>

                {/* Main testimonial card */}
                <div className="relative" data-aos="fade-up" data-aos-delay="100">
                    <div
                        key={active}
                        className="relative bg-[#111111] border border-white/8 p-8 lg:p-10 transition-all duration-300"
                        id={`testimonial-card-${active}`}
                    >
                        {/* Giant quote mark */}
                        <div className="absolute top-6 right-8 pointer-events-none select-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                className="w-16 h-16 text-[#BB9B53]/8"
                                aria-hidden="true"
                            >
                                <path d="M0 17.842C0 11.263 4.211 5.684 12.632 3L14 5.053C9.754 6.596 7.018 9.544 6.316 13.105c.351-.088.72-.132 1.105-.132C10.421 12.974 13 15.36 13 18.5c0 3.14-2.579 5.5-5.579 5.5C3.088 24 0 21.175 0 17.842zm18 0C18 11.263 22.211 5.684 30.632 3L32 5.053c-4.246 1.543-6.982 4.491-7.684 8.052.351-.088.72-.132 1.105-.132C28.421 12.974 31 15.36 31 18.5c0 3.14-2.579 5.5-5.579 5.5C21.088 24 18 21.175 18 17.842z" />
                            </svg>
                        </div>

                        {/* Game badge */}
                        <div className="mb-5">
                            <span
                                className={`${dmSans.className} inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#BB9B53] border border-[#BB9B53]/30 px-3 py-1`}
                            >
                                {current.game}
                            </span>
                        </div>

                        {/* Stars */}
                        <StarRating rating={current.rating} />

                        {/* Quote */}
                        <p
                            className={`${dmSans.className} text-white/70 text-lg lg:text-xl leading-relaxed mt-5 mb-8 max-w-3xl`}
                        >
                            &ldquo;{current.quote}&rdquo;
                        </p>

                        {/* Author + nav row */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold tracking-wide"
                                    style={{ backgroundColor: current.avatarColor }}
                                    aria-hidden="true"
                                >
                                    {current.initials}
                                </div>
                                <div>
                                    <p className={`${dmSans.className} text-white text-sm font-semibold`}>
                                        {current.name}
                                    </p>
                                    <p className={`${dmSans.className} text-white/35 text-xs`}>
                                        {current.role}
                                    </p>
                                </div>
                            </div>

                            {/* Prev / Next */}
                            <div className="flex items-center gap-2">
                                <button
                                    id="testimonials-prev"
                                    onClick={prev}
                                    aria-label="Previous testimonial"
                                    className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-[#BB9B53] hover:border-[#BB9B53]/40 transition-all duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                        <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                </button>
                                <button
                                    id="testimonials-next"
                                    onClick={next}
                                    aria-label="Next testimonial"
                                    className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-[#BB9B53] hover:border-[#BB9B53]/40 transition-all duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Gold left accent */}
                        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#BB9B53]" />
                    </div>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-2 mt-5">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                id={`testimonials-dot-${i}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={`transition-all duration-300 rounded-full ${
                                    active === i
                                        ? "w-6 h-1.5 bg-[#BB9B53]"
                                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                                }`}
                            />
                        ))}
                        <span className={`${dmSans.className} text-white/20 text-xs ml-2`}>
                            {active + 1} / {testimonials.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
