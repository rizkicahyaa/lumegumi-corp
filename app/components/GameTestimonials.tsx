"use client";

import { useState } from "react";
import { lilitaOne, dmSans } from "../fonts";
import type { Testimonial } from "../data/games";

interface Props {
    testimonials: Testimonial[];
    gameTitle: string;
}

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
                    stroke={i < rating ? "#BB9B53" : "#ffffff30"}
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

/* large open-quote SVG */
function QuoteIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8 text-[#BB9B53]/20 shrink-0"
            aria-hidden="true"
        >
            <path d="M0 17.842C0 11.263 4.211 5.684 12.632 3L14 5.053C9.754 6.596 7.018 9.544 6.316 13.105c.351-.088.72-.132 1.105-.132C10.421 12.974 13 15.36 13 18.5c0 3.14-2.579 5.5-5.579 5.5C3.088 24 0 21.175 0 17.842zm18 0C18 11.263 22.211 5.684 30.632 3L32 5.053c-4.246 1.543-6.982 4.491-7.684 8.052.351-.088.72-.132 1.105-.132C28.421 12.974 31 15.36 31 18.5c0 3.14-2.579 5.5-5.579 5.5C21.088 24 18 21.175 18 17.842z" />
        </svg>
    );
}

export default function GameTestimonials({ testimonials, gameTitle }: Props) {
    const [active, setActive] = useState(0);

    if (!testimonials || testimonials.length === 0) return null;

    const current = testimonials[active];

    // average rating
    const avgRating = Math.round(testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length);

    return (
        <div id="testimonials-section">
            {/* Section heading */}
            <h2 className={`${lilitaOne.className} text-white text-2xl mb-2 flex items-center gap-3`} id="testimonials-heading">
                <img src="/images/lume-gumi-star.png" alt="" width={20} aria-hidden="true" />
                Player Reviews
            </h2>

            {/* Summary bar */}
            <div className="flex items-center gap-3 mb-8">
                <StarRating rating={avgRating} />
                <span className={`${dmSans.className} text-white/35 text-xs`}>
                    Based on {testimonials.length} reviews for {gameTitle}
                </span>
            </div>

            {/* Featured card */}
            <div
                className="relative bg-[#111111] border border-white/8 p-7 mb-4 transition-all duration-300"
                id={`testimonial-card-${active}`}
            >
                {/* Decorative quote mark */}
                <div className="absolute top-5 right-6">
                    <QuoteIcon />
                </div>

                {/* Stars */}
                <StarRating rating={current.rating} />

                {/* Quote */}
                <p className={`${dmSans.className} text-white/70 text-base leading-relaxed mt-4 mb-6 pr-10`}>
                    &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold tracking-wide"
                        style={{ backgroundColor: current.avatarColor }}
                        aria-hidden="true"
                    >
                        {current.initials}
                    </div>
                    <div>
                        <p className={`${dmSans.className} text-white text-sm font-semibold`}>{current.name}</p>
                        <p className={`${dmSans.className} text-white/35 text-xs`}>{current.role}</p>
                    </div>
                </div>

                {/* Gold accent line */}
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#BB9B53]" />
            </div>

            {/* Thumbnail selectors */}
            {testimonials.length > 1 && (
                <div className="flex gap-3">
                    {testimonials.map((t, i) => (
                        <button
                            key={i}
                            id={`testimonial-thumb-${i}`}
                            onClick={() => setActive(i)}
                            aria-label={`View review by ${t.name}`}
                            className={`flex items-center gap-2.5 px-4 py-2.5 border text-left transition-all duration-200 ${
                                active === i
                                    ? "border-[#BB9B53]/60 bg-[#BB9B53]/8 text-white"
                                    : "border-white/8 bg-[#111111] text-white/40 hover:border-white/20 hover:text-white/60"
                            }`}
                        >
                            {/* Mini avatar */}
                            <div
                                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[9px] font-bold"
                                style={{ backgroundColor: t.avatarColor, opacity: active === i ? 1 : 0.6 }}
                            >
                                {t.initials}
                            </div>
                            <div className="hidden sm:block">
                                <p className={`${dmSans.className} text-xs font-medium leading-tight`}>{t.name}</p>
                                <div className="flex items-center gap-0.5 mt-0.5">
                                    {Array.from({ length: t.rating }).map((_, si) => (
                                        <svg key={si} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="#BB9B53" stroke="#BB9B53" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
