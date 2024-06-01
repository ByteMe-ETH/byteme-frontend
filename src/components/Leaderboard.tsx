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
        {name: "Alice", score: 220},
        {name: "Bob", score: 215},
        {name: "Charlie", score: 210},
        {name: "David", score: 205},
        {name: "Eva", score: 200},
        {name: "Fiona", score: 195},
        {name: "George", score: 190},
        {name: "Hannah", score: 185},
        {name: "Ian", score: 180},
        {name: "Jill", score: 175}
    ];

    const [players, setPlayers] = useState<Player[]>(initialPlayers);

    const sortedPlayers = players.sort((a, b) => b.score - a.score);
    const firstColumn = sortedPlayers.slice(0, 5);
    const secondColumn = sortedPlayers.slice(5, 10);

    const renderPlayers = (players: Player[], startIndex: number) => {
        return players.map((player, index) => (
            <motion.div key={index}
                        className="flex justify-between items-center mb-4 p-4 bg-white/10 rounded-lg"
                        initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: index * 0.1, duration: 0.5}}
            >
                <span className="mr-2">#{startIndex + index + 1} {player.name}</span>
                <div className="flex items-center">
                    <span>{player.score}</span>
                    <span className="px-4">
                        {startIndex + index === 0 ? '🥇' : startIndex + index === 1 ? '🥈' : startIndex + index === 2 ? '🥉' : ''}
                    </span>
                </div>
            </motion.div>
        ));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <TypewriterEffect
                words={[{text: "Leaderboard"}]}
                className="text-4xl mb-8 font-bold"
            />
            <AnimatePresence>
                <motion.div
                    className="flex flex-wrap justify-center items-start w-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.75}}
                >
                    <div className="w-full lg:w-1/2">
                        {renderPlayers(firstColumn, 0)}
                    </div>
                    <div className="w-full lg:w-1/2">
                        {renderPlayers(secondColumn, 5)}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Leaderboard;
