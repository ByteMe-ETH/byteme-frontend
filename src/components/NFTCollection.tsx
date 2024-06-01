'use client';
import {HoverEffect} from "@/components/ui/card-hover-effect"

export function NFTCollection() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={nfts}/>
        </div>
    );
}

export const nfts = [
    {
        title: "Cosmic Rook",
        description: "A visually stunning NFT featuring a rook designed with a cosmic skin, bringing a touch of the universe to your chess game.",
        link: "https://placeholder.com/cosmic-rook",
    },
    {
        title: "Dragon Knight",
        description: "Dive into fantasy with this exclusive dragon-themed skin for your knight, enhancing your chess experience with mythical aesthetics.",
        link: "https://placeholder.com/dragon-knight",
    },
    {
        title: "Enchanted Queen",
        description: "This NFT unleashes the majestic Enchanted Queen, adorned with magical elements, to dominate the chessboard.",
        link: "https://placeholder.com/enchanted-queen",
    },
    {
        title: "Steampunk Bishop",
        description: "Blend retrofuturism and chess with a bishop designed in intricate steampunk style, a true blend of art and strategy.",
        link: "https://placeholder.com/steampunk-bishop",
    },
    {
        title: "Phantom Pawn",
        description: "The Phantom Pawn NFT offers a ghostly skin that adds a layer of mystery and intrigue to your pawn's moves.",
        link: "https://placeholder.com/phantom-pawn",
    },
    {
        title: "Eternal King",
        description: "Immortalize your game with the Eternal King, featuring a timeless design that reflects both wisdom and power.",
        link: "https://placeholder.com/eternal-king",
    },
    {
        title: "Arctic Encounter",
        description: "A chess game set in a frozen landscape, where each move chips away at the ice, revealing hidden challenges beneath the board.",
        link: "https://placeholder.com/arctic-encounter",
        image: "https://placeholder.com/arctic-encounter.jpg"
    },
    {
        title: "Desert Siege",
        description: "Engage in a tactical battle on a chessboard mirroring a vast desert, where each piece moves creating sandstorms that obscure the opponent’s vision.",
        link: "https://placeholder.com/desert-siege",
        image: "https://placeholder.com/desert-siege.jpg"
    },
    {
        title: "Mystical Forest Game",
        description: "This enchanted game mode transforms the chess pieces into woodland creatures, each with unique abilities to navigate through the mystical forest.",
        link: "https://placeholder.com/mystical-forest-game",
        image: "https://placeholder.com/mystical-forest-game.jpg"
    },
    {
        title: "Volcanic Rumble",
        description: "A dynamic chess game set on a volcanic board where lava flows can alter paths and challenge strategies at random intervals.",
        link: "https://placeholder.com/volcanic-rumble",
        image: "https://placeholder.com/volcanic-rumble.jpg"
    }
];
