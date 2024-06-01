'use client';
import {HoverEffect} from "@/components/ui/card-hover-effect"

export function WagerOverview() {
    return (
        <div className="max-w-5xl mx-auto p-16">
            <HoverEffect items={wagers}/>
        </div>
    );
}

export const wagers = [
    {
        title: "0.1 ETH Blitz Game",
        description: "Type: Fast-paced blitz game.\nBet: 0.1 ETH."
    },
    {
        title: "0.2 ETH Bullet Battle",
        description: "Type: Bullet chess battle.\nBet: 0.2 ETH.",
    },
    {
        title: "0.5 ETH Standard Duel",
        description: "Type: Standard chess match with classic time controls.\nBet: 0.5 ETH.",
    },
    {
        title: "2 ETH High Roller Face-off",
        description: "Type: High stakes game.\nBet: 2 ETH.",
    },
]