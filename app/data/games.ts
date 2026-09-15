export interface Testimonial {
    name: string;
    role: string;
    initials: string;
    avatarColor: string;
    rating: number; // 1-5
    quote: string;
}

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
    testimonials?: Testimonial[];
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
        description: "A time and resource management strategy game with 2.5D cartoon art style, set in a whimsical medieval fairy-tale world full of wonder.",
        longDescription: "Bean & Debt is a charming time and resource management strategy game that takes you on an enchanting journey through a whimsical medieval fairy-tale world. With a stunning 2.5D cartoon art style, you'll manage your kingdom's resources, balance your economy, and unravel mysteries lurking beneath the surface of this magical realm. Every decision you make counts — from harvesting magical beans to managing debt with fantastical creditors. Can you build a thriving kingdom without losing everything you've worked for?",
        image: "/images/slide-1.png",
        bannerImage: "/images/slide-1.png",
        gallery: ["/images/slide-1.png", "/images/bean-and-debt-2.png", "/images/bean-and-debt-char.png"],
        tags: ["2.5D", "Strategy", "Medieval"],
        link: "https://store.steampowered.com/app/4515610/Bean__Debt/?beta=0",
        platform: ["PC (Steam)"],
        delay: 0,
        wishlist: true,
        developer: "Lume Gumi Corp.",
        testimonials: [
            {
                name: "Aria Kestrel",
                role: "Strategy Game Enthusiast",
                initials: "AK",
                avatarColor: "#6C4FBF",
                rating: 5,
                quote: "Bean & Debt is an absolute gem. The art style is incredibly charming and the resource management keeps me hooked for hours. Managing debt with fantastical creditors? Pure genius.",
            },
            {
                name: "Marcus Tan",
                role: "Indie Game Reviewer",
                initials: "MT",
                avatarColor: "#2E7D6B",
                rating: 5,
                quote: "One of the most refreshing strategy games I've played in years. The 2.5D visuals are stunning and the gameplay loop is incredibly satisfying. Highly recommend!",
            },
            {
                name: "Yuki Haramoto",
                role: "Casual Gamer",
                initials: "YH",
                avatarColor: "#B85C38",
                rating: 4,
                quote: "I don't usually play strategy games but Bean & Debt won me over. The fairy-tale world is so cozy and the mechanics are easy to learn but hard to master.",
            },
        ],
        releaseYear: "2025",
        features: ["Charming 2.5D cartoon art style", "Deep resource management mechanics", "Rich medieval fairy-tale world", "Strategic debt management gameplay"],
    },
    {
        id: 2,
        slug: "fox-gotta-eat",
        title: "Fox Gotta Eat",
        genre: "Strategy · Risk Management",
        description: "Manage limited funds and spin the wheel of fortune as Saffron the fox at a lively carnival festival full of risk and reward.",
        longDescription: "Step into the fuzzy paws of Saffron the fox at a vibrant carnival festival. Fox Gotta Eat is a delightful risk management strategy game where every coin counts and every spin of the wheel could be your last. Wager wisely, know when to walk away, and keep Saffron fed through the dazzling, neon-lit fairgrounds. With charming 2D visuals and addictive gameplay loops, this game tests your ability to weigh risk against reward in the most colourful way possible.",
        image: "/images/fox-gotta-eat-3.png",
        bannerImage: "/images/fox-gotta-eat.png",
        gallery: ["/images/fox-gotta-eat-3.png", "/images/fox-gotta-eat-2.png", "/images/fox-gotta-eat.png"],
        tags: ["2D", "Casual", "Carnival"],
        link: "https://revmagames.itch.io/foxgottaeat",
        platform: ["PC (itch.io)", "Browser"],
        delay: 100,
        developer: "Lume Gumi Corp.",
        testimonials: [
            {
                name: "Priya Nair",
                role: "Casual Mobile Gamer",
                initials: "PN",
                avatarColor: "#C0392B",
                rating: 5,
                quote: "Fox Gotta Eat is so addictive! The risk vs reward mechanic is perfectly balanced and Saffron is absolutely adorable. I've been recommending it to all my friends.",
            },
            {
                name: "Leo Vander",
                role: "Game Jam Judge",
                initials: "LV",
                avatarColor: "#1A6B8A",
                rating: 5,
                quote: "Brilliant execution of a simple concept. The carnival atmosphere is vibrant, the audio design is top-notch, and the risk management element creates real tension.",
            },
            {
                name: "Dina Pratiwi",
                role: "itch.io Curator",
                initials: "DP",
                avatarColor: "#7D6B2E",
                rating: 4,
                quote: "A super fun browser game with a lot of heart. The art is cute, the gameplay is quick to pick up, and it's perfect for short gaming sessions.",
            },
        ],
        releaseYear: "2024",
        features: ["Risk vs reward gameplay", "Charming cartoon art style", "Addictive casual mechanics", "Lively carnival atmosphere"],
    },
    {
        id: 3,
        slug: "plushie-odyssey",
        title: "Plushie Odyssey",
        genre: "Tactical Strategy · Defense",
        description: "Craft formation tactics and lead guardian knights against the forces of darkness in a captivating anime fantasy world.",
        longDescription: "Plushie Odyssey is a captivating tactical strategy and defense game set in an enchanting anime fantasy world. Command your army of adorable yet formidable guardian knights as they face off against relentless waves of darkness. Master formation tactics, upgrade your units, and protect your kingdom from the encroaching evil. With gorgeous anime-inspired visuals and deep strategic gameplay, Plushie Odyssey offers a unique blend of cute aesthetics and intense tactical combat.",
        image: "/images/plushie-odyssey-2.png",
        bannerImage: "/images/plushie-odyssey.png",
        gallery: ["/images/plushie-odyssey-2.png", "/images/plushie-odyssey.png", "/images/plushie-char.png"],
        tags: ["Anime", "Tactical", "Fantasy"],
        link: "https://embohtotally.itch.io/plushie-odessy",
        platform: ["PC (itch.io)", "Browser"],
        delay: 200,
        developer: "Lume Gumi Corp.",
        testimonials: [
            {
                name: "Kazuki Mori",
                role: "Anime & Tactics Fan",
                initials: "KM",
                avatarColor: "#8E44AD",
                rating: 5,
                quote: "Plushie Odyssey perfectly blends adorable aesthetics with genuinely deep tactical gameplay. The formation system is unique and the anime art style is gorgeous.",
            },
            {
                name: "Sofia Mendes",
                role: "Tower Defense Veteran",
                initials: "SM",
                avatarColor: "#16A085",
                rating: 5,
                quote: "As someone who has played every major tower defense game out there, Plushie Odyssey stands out. The guardian knights mechanic adds a layer of strategy I haven't seen before.",
            },
            {
                name: "Rafi Adnan",
                role: "Game Developer",
                initials: "RA",
                avatarColor: "#D35400",
                rating: 4,
                quote: "Impressive work from Lume Gumi. The art direction is cohesive, the difficulty curve is well-tuned, and the fantasy world feels alive. Great game for anime fans.",
            },
        ],
        releaseYear: "2024",
        features: ["Tactical formation-based combat", "Anime-inspired fantasy world", "Progressive unit upgrades", "Challenging defense mechanics"],
    },
    {
        id: 4,
        slug: "echo-chamber",
        title: "Echo Chamber",
        genre: "Puzzle · Strategy",
        description: "You are trapped in an ever-shifting echo chamber. Solve each level by predicting sound reflection patterns and escape before you're lost forever.",
        longDescription: "Echo Chamber is a mind-bending puzzle strategy game that traps you inside an ever-shifting acoustic labyrinth. You must predict how sound waves bounce and reflect off the environment to solve increasingly complex puzzles. With its eerie 2.5D atmosphere, each chamber presents unique challenges that test your spatial reasoning and strategic thinking. One wrong move and the echoes consume you — can you find the exit before you're lost in the resonance forever?",
        image: "/images/echo-chamber.png",
        bannerImage: "/images/echo-chamber.png",
        gallery: ["/images/echo-chamber.png"],
        tags: ["2.5D", "Puzzle", "Strategy"],
        link: "https://versequest.itch.io/echo-chamber",
        platform: ["PC (itch.io)", "Browser"],
        delay: 300,
        developer: "Lume Gumi Corp.",
        testimonials: [
            {
                name: "Ethan Cole",
                role: "Puzzle Game Collector",
                initials: "EC",
                avatarColor: "#2471A3",
                rating: 5,
                quote: "Echo Chamber messed with my head in the best way possible. Predicting sound waves to solve puzzles is such a creative concept. Each level feels like a unique mind puzzle.",
            },
            {
                name: "Nadia Kuznetsova",
                role: "Indie Game Blogger",
                initials: "NK",
                avatarColor: "#922B21",
                rating: 5,
                quote: "The atmosphere in Echo Chamber is unlike anything I've experienced. The eerie visuals paired with the sound-reflection mechanic create a uniquely unsettling and satisfying experience.",
            },
            {
                name: "Bram Wijaya",
                role: "Student Game Dev",
                initials: "BW",
                avatarColor: "#1E8449",
                rating: 4,
                quote: "Super creative concept from an indie team. The puzzle design is clever and the visual style is atmospheric. Would love to see a longer version with more chambers!",
            },
        ],
        releaseYear: "2024",
        features: ["Unique sound-based puzzle mechanics", "Ever-shifting level design", "Atmospheric 2.5D visuals", "Progressive difficulty curve"],
    },
    {
        id: 5,
        slug: "path-of-lumino",
        title: "Path of Lumino",
        genre: "Puzzle · Strategy",
        description: "A student project for GAMESEED 2025. Guide Lumino through a world of light and shadow in a captivating and unique experience.",
        longDescription: "Path of Lumino is a student project created for GAMESEED 2025 that invites you to guide a small being of light through a breathtaking world of contrasting light and shadow. Navigate through intricate puzzles where light is both your guide and your greatest challenge. Shift between illuminated and darkened realms, discover hidden paths, and unveil the story of Lumino's journey in this unique and thought-provoking experience.",
        image: "/images/path-of-lumino.jpg",
        bannerImage: "/images/path-of-lumino.jpg",
        gallery: ["/images/path-of-lumino.jpg"],
        tags: ["Student Project", "Gameseed 2025", "Creative"],
        link: "https://embohtotally.itch.io/path-of-lumino",
        platform: ["PC (itch.io)", "Browser"],
        delay: 400,
        developer: "Lume Gumi Corp.",
        testimonials: [
            {
                name: "Tasha Renard",
                role: "Game Jam Enthusiast",
                initials: "TR",
                avatarColor: "#7B241C",
                rating: 5,
                quote: "Path of Lumino is a stunning student project. The light and shadow mechanics are implemented beautifully, and the atmosphere is wonderfully contemplative. A real standout at GAMESEED 2025.",
            },
            {
                name: "Hendra Putra",
                role: "GAMESEED 2025 Attendee",
                initials: "HP",
                avatarColor: "#1F618D",
                rating: 5,
                quote: "I played this at GAMESEED and was blown away. The concept is elegant and the execution is well above what you'd expect from a student team. Lumino's journey is genuinely moving.",
            },
            {
                name: "Cici Handayani",
                role: "Puzzle Game Lover",
                initials: "CH",
                avatarColor: "#117A65",
                rating: 4,
                quote: "A thoughtful and beautiful puzzle game. The way light and shadow interact with the gameplay feels magical. Excited to see what Lume Gumi creates next!",
            },
        ],
        releaseYear: "2025",
        features: ["Light and shadow mechanics", "Atmospheric puzzle design", "Compelling narrative journey", "GAMESEED 2025 competition entry"],
    },
    {
        id: 6,
        slug: "piece-by-piece",
        title: "Piece By Piece",
        genre: "Puzzle · Strategy",
        description: "A relaxing puzzle game where you reconstruct the world one piece at a time. Enjoy a calming atmosphere and satisfying gameplay mechanics.",
        longDescription: "Piece By Piece is a serene and satisfying puzzle game that invites you to slow down and reconstruct a world, one piece at a time. With its calming visual aesthetic and meditative soundtrack, this game is designed to melt away stress while delivering genuinely rewarding puzzle gameplay. Each piece you place brings a fragmented world back to life, revealing beautiful vistas and hidden stories. Perfect for anyone seeking a relaxing, yet engaging experience.",
        image: "/images/piece-by-piece.png",
        bannerImage: "/images/piece-by-piece.png",
        gallery: ["/images/piece-by-piece.png"],
        tags: ["Puzzle", "Relaxing", "Casual"],
        link: "https://embohtotally.itch.io/piece-by-piece",
        platform: ["PC (itch.io)", "Browser"],
        delay: 500,
        developer: "Lume Gumi Corp.",
        testimonials: [
            {
                name: "Mia Thornton",
                role: "Relaxation Game Fan",
                initials: "MT",
                avatarColor: "#6C3483",
                rating: 5,
                quote: "Piece By Piece is exactly what I needed. After a stressful day, sitting down and rebuilding the world one piece at a time is incredibly therapeutic. The art is gorgeous too.",
            },
            {
                name: "Dito Asmara",
                role: "Casual Gamer",
                initials: "DA",
                avatarColor: "#1A5276",
                rating: 5,
                quote: "Such a peaceful and satisfying experience. The puzzle mechanics are intuitive and rewarding, and the world that slowly comes together is beautiful. A perfect cozy game.",
            },
            {
                name: "Fanny Setiawan",
                role: "UI/UX Designer",
                initials: "FS",
                avatarColor: "#784212",
                rating: 4,
                quote: "From a design perspective, Piece By Piece is excellent. Clean UI, calming color palette, and a gameplay loop that respects the player's time. Lume Gumi clearly put a lot of care into this.",
            },
        ],
        releaseYear: "2024",
        features: ["Relaxing puzzle gameplay", "Calming visual atmosphere", "Satisfying reconstruction mechanics", "Stress-free gaming experience"],
    },
];

export function getGameBySlug(slug: string): Game | undefined {
    return games.find((g) => g.slug === slug);
}
