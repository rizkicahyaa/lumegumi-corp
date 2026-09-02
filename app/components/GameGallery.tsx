"use client";

import { useState } from "react";
import Image from "next/image";
import { dmSans } from "../fonts";

interface Props {
    images: string[];
    title: string;
}

export default function GameGallery({ images, title }: Props) {
    const [active, setActive] = useState(0);
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <>
            {/* Main preview */}
            <div
                className="relative w-full overflow-hidden cursor-zoom-in mb-3 group"
                style={{ aspectRatio: "16/9" }}
                onClick={() => setLightbox(active)}
                role="button"
                aria-label={`View ${title} screenshot ${active + 1} fullscreen`}
                id="gallery-main-preview"
            >
                <Image
                    src={images[active]}
                    alt={`${title} screenshot ${active + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                />
                {/* Zoom hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="bg-black/60 rounded-full p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                        >
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-2">
                    {images.map((src, i) => (
                        <button
                            key={i}
                            id={`gallery-thumb-${i}`}
                            onClick={() => setActive(i)}
                            aria-label={`View screenshot ${i + 1}`}
                            className={`relative overflow-hidden shrink-0 transition-all duration-200 ${
                                active === i
                                    ? "ring-2 ring-[#BB9B53] ring-offset-2 ring-offset-[#0a0a0a] opacity-100"
                                    : "opacity-40 hover:opacity-70"
                            }`}
                            style={{ width: 80, height: 50 }}
                        >
                            <Image
                                src={src}
                                alt={`Thumbnail ${i + 1}`}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                    id="gallery-lightbox"
                >
                    {/* Close btn */}
                    <button
                        onClick={() => setLightbox(null)}
                        id="gallery-lightbox-close"
                        aria-label="Close lightbox"
                        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors duration-200 z-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-7 h-7"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Prev */}
                    {images.length > 1 && (
                        <button
                            id="gallery-lightbox-prev"
                            aria-label="Previous image"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightbox((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
                                setActive((prev) => (prev - 1 + images.length) % images.length);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 z-10 p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-8 h-8"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                    )}

                    {/* Image */}
                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full mx-8"
                        onClick={(e) => e.stopPropagation()}
                        style={{ aspectRatio: "16/9" }}
                    >
                        <Image
                            src={images[lightbox]}
                            alt={`${title} screenshot ${lightbox + 1}`}
                            fill
                            sizes="90vw"
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Next */}
                    {images.length > 1 && (
                        <button
                            id="gallery-lightbox-next"
                            aria-label="Next image"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightbox((prev) => (prev === null ? 0 : (prev + 1) % images.length));
                                setActive((prev) => (prev + 1) % images.length);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 z-10 p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-8 h-8"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                        <span className={`${dmSans.className} text-white/40 text-sm`}>
                            {lightbox + 1} / {images.length}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
