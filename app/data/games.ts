export interface Game {
    id: number;
    slug: string;
    title: string;
    genre: string;
    description: string;
    longDescription: string;
    image: string;
    bannerImage?: string;
    gallery?: string[];
    tags: string[];
    link?: string;
    platform?: string[];
    delay: number;
    wishlist?: boolean;
    developer?: string;
    releaseYear?: string;
    features?: string[];
}

export const games: Game[] = [
    {
        id: 1,
        slug: "bean-and-debt",
        title: "Bean & Debt",
        genre: "Strategy · Management",
        description:
            "A time and resource management strategy game with 2.5D cartoon art style, set in a whimsical medieval fairy-tale world full of wonder.",
        longDescription:
            "Bean & Debt is a charming time and resource management strategy game that takes you on an enchanting journey through a whimsical medieval fairy-tale world. With a stunning 2.5D cartoon art style, you'll manage your kingdom's resources, balance your economy, and unravel mysteries lurking beneath the surface of this magical realm. Every decision you make counts — from harvesting magical beans to managing debt with fantastical creditors. Can you build a thriving kingdom without losing everything you've worked for?",
        image: "/images/slide-1.png",
        bannerImage: "/images/bean-and-debt-2.png",
        gallery: ["/images/slide-1.png", "/images/bean-and-debt-2.png", "/images/bean-and-debt-char.png"],
        tags: ["2.5D", "Strategy", "Medieval"],
        link: "https://store.steampowered.com/app/4515610/Bean__Debt/?beta=0",
        platform: ["PC (Steam)"],
        delay: 0,
        wishlist: true,
        developer: "Lume Gumi Corp.",
        releaseYear: "2025",
        features: [
            "Charming 2.5D cartoon art style",
            "Deep resource management mechanics",
            "Rich medieval fairy-tale world",
            "Strategic debt management gameplay",
        ],
    },
    {
        id: 2,
        slug: "fox-gotta-eat",
        title: "Fox Gotta Eat",
        genre: "Strategy · Risk Management",
        description:
            "Manage limited funds and spin the wheel of fortune as Saffron the fox at a lively carnival festival full of risk and reward.",
        longDescription:
            "Step into the fuzzy paws of Saffron the fox at a vibrant carnival festival. Fox Gotta Eat is a delightful risk management strategy game where every coin counts and every spin of the wheel could be your last. Wager wisely, know when to walk away, and keep Saffron fed through the dazzling, neon-lit fairgrounds. With charming 2D visuals and addictive gameplay loops, this game tests your ability to weigh risk against reward in the most colourful way possible.",
        image: "/images/fox-gotta-eat-3.png",
        bannerImage: "/images/fox-gotta-eat-2.png",
        gallery: ["/images/fox-gotta-eat-3.png", "/images/fox-gotta-eat-2.png", "/images/fox-gotta-eat.png"],
        tags: ["2D", "Casual", "Carnival"],
        link: "https://revmagames.itch.io/foxgottaeat",
        platform: ["PC (itch.io)", "Browser"],
        delay: 100,
        developer: "Lume Gumi Corp.",
        releaseYear: "2024",
        features: [
            "Risk vs reward gameplay",
            "Charming cartoon art style",
            "Addictive casual mechanics",
            "Lively carnival atmosphere",
        ],
    },
    {
        id: 3,
        slug: "plushie-odyssey",
        title: "Plushie Odyssey",
        genre: "Tactical Strategy · Defense",
        description:
            "Craft formation tactics and lead guardian knights against the forces of darkness in a captivating anime fantasy world.",
        longDescription:
            "Plushie Odyssey is a captivating tactical strategy and defense game set in an enchanting anime fantasy world. Command your army of adorable yet formidable guardian knights as they face off against relentless waves of darkness. Master formation tactics, upgrade your units, and protect your kingdom from the encroaching evil. With gorgeous anime-inspired visuals and deep strategic gameplay, Plushie Odyssey offers a unique blend of cute aesthetics and intense tactical combat.",
        image: "/images/plushie-odyssey-2.png",
        bannerImage: "/images/plushie-odyssey.png",
        gallery: ["/images/plushie-odyssey-2.png", "/images/plushie-odyssey.png", "/images/plushie-char.png"],
        tags: ["Anime", "Tactical", "Fantasy"],
        link: "https://embohtotally.itch.io/plushie-odessy",
        platform: ["PC (itch.io)", "Browser"],
        delay: 200,
        developer: "Lume Gumi Corp.",
        releaseYear: "2024",
        features: [
            "Tactical formation-based combat",
            "Anime-inspired fantasy world",
            "Progressive unit upgrades",
            "Challenging defense mechanics",
        ],
    },
    {
        id: 4,
        slug: "echo-chamber",
        title: "Echo Chamber",
        genre: "Puzzle · Strategy",
        description:
            "You are trapped in an ever-shifting echo chamber. Solve each level by predicting sound reflection patterns and escape before you're lost forever.",
        longDescription:
            "Echo Chamber is a mind-bending puzzle strategy game that traps you inside an ever-shifting acoustic labyrinth. You must predict how sound waves bounce and reflect off the environment to solve increasingly complex puzzles. With its eerie 2.5D atmosphere, each chamber presents unique challenges that test your spatial reasoning and strategic thinking. One wrong move and the echoes consume you — can you find the exit before you're lost in the resonance forever?",
        image: "/images/echo-chamber.png",
        bannerImage: "/images/echo-chamber.png",
        gallery: ["/images/echo-chamber.png"],
        tags: ["2.5D", "Puzzle", "Strategy"],
        link: "https://versequest.itch.io/echo-chamber",
        platform: ["PC (itch.io)", "Browser"],
        delay: 300,
        developer: "Lume Gumi Corp.",
        releaseYear: "2024",
        features: [
            "Unique sound-based puzzle mechanics",
            "Ever-shifting level design",
            "Atmospheric 2.5D visuals",
            "Progressive difficulty curve",
        ],
    },
    {
        id: 5,
        slug: "path-of-lumino",
        title: "Path of Lumino",
        genre: "Puzzle · Strategy",
        description:
            "A student project for GAMESEED 2025. Guide Lumino through a world of light and shadow in a captivating and unique experience.",
        longDescription:
            "Path of Lumino is a student project created for GAMESEED 2025 that invites you to guide a small being of light through a breathtaking world of contrasting light and shadow. Navigate through intricate puzzles where light is both your guide and your greatest challenge. Shift between illuminated and darkened realms, discover hidden paths, and unveil the story of Lumino's journey in this unique and thought-provoking experience.",
        image: "/images/path-of-lumino.jpg",
        bannerImage: "/images/path-of-lumino.jpg",
        gallery: ["/images/path-of-lumino.jpg"],
        tags: ["Student Project", "Gameseed 2025", "Creative"],
        link: "https://embohtotally.itch.io/path-of-lumino",
        platform: ["PC (itch.io)", "Browser"],
        delay: 400,
        developer: "Lume Gumi Corp.",
        releaseYear: "2025",
        features: [
            "Light and shadow mechanics",
            "Atmospheric puzzle design",
            "Compelling narrative journey",
            "GAMESEED 2025 competition entry",
        ],
    },
    {
        id: 6,
        slug: "piece-by-piece",
        title: "Piece By Piece",
        genre: "Puzzle · Strategy",
        description:
            "A relaxing puzzle game where you reconstruct the world one piece at a time. Enjoy a calming atmosphere and satisfying gameplay mechanics.",
        longDescription:
            "Piece By Piece is a serene and satisfying puzzle game that invites you to slow down and reconstruct a world, one piece at a time. With its calming visual aesthetic and meditative soundtrack, this game is designed to melt away stress while delivering genuinely rewarding puzzle gameplay. Each piece you place brings a fragmented world back to life, revealing beautiful vistas and hidden stories. Perfect for anyone seeking a relaxing, yet engaging experience.",
        image: "/images/piece-by-piece.png",
        bannerImage: "/images/piece-by-piece.png",
        gallery: ["/images/piece-by-piece.png"],
        tags: ["Puzzle", "Relaxing", "Casual"],
        link: "https://embohtotally.itch.io/piece-by-piece",
        platform: ["PC (itch.io)", "Browser"],
        delay: 500,
        developer: "Lume Gumi Corp.",
        releaseYear: "2024",
        features: [
            "Relaxing puzzle gameplay",
            "Calming visual atmosphere",
            "Satisfying reconstruction mechanics",
            "Stress-free gaming experience",
        ],
    },
];

export function getGameBySlug(slug: string): Game | undefined {
    return games.find((g) => g.slug === slug);
}
