import React, {useState} from "react";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import WagerModal from "@/context/WagerModal"

import {
    IconCurrencyDollar,
    IconShield,
    IconTrophy,
    IconUserPlus,
} from "@tabler/icons-react";

const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export function BentoGridHero() {
    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

    const items = [
        {
            title: "Join Tournament",
            description: "Browse and enter Ethereum-based chess tournaments. Compete for Ether rewards and enhance your ranking.",
            header: <Skeleton/>,
            className: "md:col-span-2",
            icon: <IconUserPlus className="h-4 w-4 text-neutral-500"/>,
            action: () => console.log("Join Tournament")
        },
        {
            title: "Create Tournament",
            description: "Organize your own chess tournament with Ether stakes. Set the rules, the entry fee, and manage participants.",
            header: <Skeleton/>,
            className: "md:col-span-1",
            icon: <IconTrophy className="h-4 w-4 text-neutral-500"/>,
            action: () => console.log("Create Tournament")
        },
        {
            title: "Create Wager",
            description: "Challenge other players in high-stakes games. Set your wager in Ether and prove your skills.",
            header: <Skeleton/>,
            className: "md:col-span-1",
            icon: <IconCurrencyDollar className="h-4 w-4 text-neutral-500"/>,
            action: () => setModalOpen(true)
        },
        {
            title: "PvP Overview",
            description: "Engage in direct player-versus-player combat. Track your wins, losses, and wager history.",
            header: <Skeleton/>,
            className: "md:col-span-2",
            icon: <IconShield className="h-4 w-4 text-neutral-500"/>,
            action: () => console.log("PvP Overview")
        },
    ];

    return (
        <div>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                        action={item.action}
                    />
                ))}
            </BentoGrid>
            {/* Wager Modal */}
            <WagerModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </div>
    );
}