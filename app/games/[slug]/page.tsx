import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { lilitaOne, dmSans } from "../../fonts";
import { games, getGameBySlug } from "../../data/games";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GameGallery from "../../components/GameGallery";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const game = getGameBySlug(slug);
    if (!game) return { title: "Game Not Found - Lume Gumi" };
    return {
        title: `${game.title} - Lume Gumi Corp.`,
        description: game.description,
        openGraph: {
            title: `${game.title} - Lume Gumi Corp.`,
            description: game.description,
            images: [{ url: game.image }],
        },
    };
}

export default async function GameDetailPage({ params }: Props) {
    const { slug } = await params;
    const game = getGameBySlug(slug);
    if (!game) notFound();

    const otherGames = games.filter((g) => g.slug !== game.slug).slice(0, 3);

    return (
        <main className="flex flex-col flex-1">
            <Navbar />

            {/* ── Hero Banner ────────────────────────────────────────────── */}
            <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image src={game.bannerImage ?? game.image} alt={game.title} fill priority sizes="100vw" className="object-cover" />
                    {/* dark gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
                    {/* top overlay — keeps navbar text readable */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent" />
                </div>

                {/* Hero content */}
                <div className="relative z-10 px-6 lg:px-16 flex flex-col justify-end h-full pb-12 pt-40">
                    <div className="max-w-6xl mx-auto w-full">
                        {/* Back link */}
                        <Link href="/#games" className={`${dmSans.className} inline-flex items-center gap-2 text-white/50 hover:text-[#BB9B53] text-sm font-medium transition-colors duration-200 mb-8 group w-fit`} id="back-to-games">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                            Back to Games
                        </Link>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {game.tags.map((tag) => (
                                <span key={tag} className={`${dmSans.className} text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 border border-white/15 px-3 py-1 rounded-full`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className={`${lilitaOne.className} text-white text-4xl lg:text-6xl leading-tight mb-3`} id="game-title">
                            {game.title}
                        </h1>

                        {/* Genre */}
                        <p className={`${dmSans.className} text-[#BB9B53] text-base font-medium`}>{game.genre}</p>
                    </div>
                </div>
            </section>

            {/* ── Main Content ─────────────────────────────────────────────── */}
            <div className="bg-[#0a0a0a] section-texture relative py-16 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left: description + gallery */}
                        <div className="lg:col-span-2 flex flex-col gap-12">
                            {/* About */}
                            <div>
                                <h2 className={`${lilitaOne.className} text-white text-2xl mb-5 flex items-center gap-3`} id="about-game-heading">
                                    <img src="/images/lume-gumi-star.png" alt="" width={20} aria-hidden="true" />
                                    About the Game
                                </h2>
                                <p className={`${dmSans.className} text-white/60 text-base leading-relaxed`}>{game.longDescription}</p>
                            </div>

                            {/* Key Features */}
                            {game.features && game.features.length > 0 && (
                                <div>
                                    <h2 className={`${lilitaOne.className} text-white text-2xl mb-5 flex items-center gap-3`} id="features-heading">
                                        <img src="/images/lume-gumi-star.png" alt="" width={20} aria-hidden="true" />
                                        Key Features
                                    </h2>
                                    <ul className="flex flex-col gap-3">
                                        {game.features.map((feature, i) => (
                                            <li key={i} className={`${dmSans.className} flex items-start gap-3 text-white/60 text-sm leading-relaxed`}>
                                                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#BB9B53]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Gallery */}
                            {game.gallery && game.gallery.length > 1 && (
                                <div>
                                    <h2 className={`${lilitaOne.className} text-white text-2xl mb-5 flex items-center gap-3`} id="gallery-heading">
                                        <img src="/images/lume-gumi-star.png" alt="" width={20} aria-hidden="true" />
                                        Gallery
                                    </h2>
                                    <GameGallery images={game.gallery} title={game.title} />
                                </div>
                            )}
                        </div>

                        {/* Right: info card */}
                        <aside className="flex flex-col gap-6">
                            {/* CTA card */}
                            <div className="border border-white/10 bg-[#111111] p-6 flex flex-col gap-5">
                                {/* Cover thumbnail */}
                                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                    <Image src={game.image} alt={game.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                                </div>

                                {/* Play / Wishlist button */}
                                {game.link && (
                                    <a href={game.link} target="_blank" rel="noopener noreferrer" id={`play-${game.slug}`} className={`${dmSans.className} flex items-center justify-center gap-2 w-full py-3 px-5 text-sm font-bold tracking-wide uppercase transition-all duration-200 ${game.wishlist ? "bg-[#BB9B53] text-[#1a1a1a] hover:bg-[#d4b26a]" : "bg-white/10 text-white hover:bg-white/20 border border-white/15"}`}>
                                        {game.wishlist ? (
                                            <>
                                                <Image src="/images/steam.webp" alt="Steam" width={18} height={18} className="object-contain" />
                                                Wishlist on Steam
                                            </>
                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <polygon points="5 3 19 12 5 21 5 3" />
                                                </svg>
                                                Play Now
                                            </>
                                        )}
                                    </a>
                                )}

                                {/* Info list */}
                                <div className="flex flex-col gap-4 border-t border-white/8 pt-5">
                                    <InfoRow label="Developer" value={game.developer ?? "Lume Gumi Corp."} />
                                    {game.releaseYear && <InfoRow label="Release Year" value={game.releaseYear} />}
                                    {game.platform && <InfoRow label="Platform" value={game.platform.join(", ")} />}
                                    <InfoRow label="Genre" value={game.genre} />
                                </div>
                            </div>

                            {/* Share / links */}
                            <div className="border border-white/10 bg-[#111111] p-5">
                                <p className={`${dmSans.className} text-white/25 text-xs tracking-[0.2em] uppercase mb-4`}>Share this game</p>
                                <div className="flex gap-2">
                                    <ShareButton href={`https://twitter.com/intent/tweet?text=Check+out+${encodeURIComponent(game.title)}+by+Lume+Gumi!&url=${encodeURIComponent(game.link ?? "")}`} label="Share on X" id={`share-x-${game.slug}`}>
                                        {/* X icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </ShareButton>
                                    <ShareButton href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(game.link ?? "")}`} label="Share on Facebook" id={`share-fb-${game.slug}`}>
                                        {/* Facebook icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </ShareButton>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* ── More Games ──────────────────────────────────────────── */}
                    {otherGames.length > 0 && (
                        <div className="mt-20 border-t border-white/8 pt-14">
                            <h2 className={`${lilitaOne.className} text-white text-2xl mb-8 flex items-center gap-3`} id="more-games-heading">
                                <img src="/images/lume-gumi-star.png" alt="" width={20} aria-hidden="true" />
                                More Games
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {otherGames.map((g) => (
                                    <Link key={g.id} href={`/games/${g.slug}`} id={`more-game-${g.slug}`} className="group relative flex flex-col bg-[#111111] border border-white/8 hover:border-white/20 hover:bg-[#1c1c1c] transition-all duration-300 overflow-hidden">
                                        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                            <Image src={g.image} alt={g.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                        </div>
                                        <div className="p-5">
                                            <h3 className={`${lilitaOne.className} text-white text-lg mb-1 group-hover:text-[#BB9B53] transition-colors duration-300`}>{g.title}</h3>
                                            <p className={`${dmSans.className} text-white/40 text-xs`}>{g.genre}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}

/* ── Helper components ─────────────────────────────────────────────────────── */

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <span className={`${dmSans.className} text-white/25 text-[10px] tracking-[0.2em] uppercase`}>{label}</span>
            <span className={`${dmSans.className} text-white/70 text-sm`}>{value}</span>
        </div>
    );
}

function ShareButton({ href, label, id, children }: { href: string; label: string; id: string; children: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} id={id} className="flex items-center justify-center w-10 h-10 border border-white/10 text-white/40 hover:text-[#BB9B53] hover:border-[#BB9B53]/40 transition-all duration-200">
            {children}
        </a>
    );
}
