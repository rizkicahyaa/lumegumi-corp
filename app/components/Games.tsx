"use client";

import Image from "next/image";
import Link from "next/link";
import { lilitaOne, dmSans } from "../fonts";
import { games } from "../data/games";

export default function Games() {
    return (
        <section id="games" className="section-texture w-full bg-[#111111] relative py-20 px-6 lg:px-16 overflow-hidden" aria-labelledby="games-heading">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-7" data-aos="fade-up">
                    <h2 id="games-heading" className={`${lilitaOne.className} text-white text-3xl lg:text-4xl flex items-center gap-4`}>
                        <img src="/images/lume-gumi-star.png" alt="Star" width={30} />
                        Games
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {games.map((game) => (
                        <Link
                            key={game.id}
                            href={`/games/${game.slug}`}
                            id={`game-card-${game.slug}`}
                            data-aos="fade-up"
                            data-aos-delay={game.delay}
                            className="group relative flex flex-col bg-[#111111] border border-white/8 hover:border-white/20 hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                <Image src={game.image} alt={game.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                                {game.wishlist && (
                                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-[#BB9B53] text-[#1a1a1a] text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-lg shadow-black/30">
                                        <Image src="/images/steam.webp" alt="Steam" width={20} height={20} className="object-contain" /> Wishlist on Steam
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col flex-1 p-6 relative">
                                <h3 className={`${lilitaOne.className} text-white text-xl mb-3 group-hover:text-[#BB9B53] transition-colors duration-300`}>{game.title}</h3>
                                <p className={`${dmSans.className} text-white/50 text-sm leading-relaxed flex-1`}>{game.description}</p>

                                <div className="flex items-end justify-between gap-3 mt-5 pt-5 border-t border-white/8">
                                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                                        {game.tags.map((tag) => (
                                            <span key={tag} className={`${dmSans.className} text-[11px] font-medium text-white/40 tracking-wider uppercase`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Arrow icon */}
                                    <span className="shrink-0 text-white/25 group-hover:text-[#BB9B53] transition-colors duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
