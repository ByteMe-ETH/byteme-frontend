'use client'

import React, {useState} from 'react';
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import {AnimatePresence, motion} from "framer-motion";

interface Player {
    name: string;
    score: number;
}

const Leaderboard: React.FC = () => {
    const initialPlayers: Player[] = [
        {name: "Alice", score: 20},
        {name: "Bob", score: 15},
        {name: "Charlie", score: 25}
    ];

    const [players, setPlayers] = useState<Player[]>(initialPlayers);

    const sortPlayers = () => {
        return [...players].sort((a, b) => b.score - a.score);
    };

    const displayLeaderboard = () => {
        return sortPlayers().map((player, index) => (
            <div key={index} className="flex justify-between items-center mb-4 bg-white/10 p-4 rounded-lg">
                <span className="mr-2">{player.name}</span>
                <div className="flex items-center">
                    <span>{player.score}</span>
                    <span className="ml-2">
          {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}
        </span>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex flex-col items-center justify-center w-1/4
        ">
            <TypewriterEffect
                words={[{text: "Leaderboard"}]}
                className="mb-8"
            />
            <AnimatePresence>
                <motion.div className="bg-black/50 p-8 rounded-3xl max-w-4xl w-full"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.75}}
                >
                    {displayLeaderboard()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Leaderboard;