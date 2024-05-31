'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Web3Connect from "@/hooks/Web3Connect";
import { AuroraBackground } from "@/components/ui/aurora-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const Home: React.FC = () => {
    return (
        <AuroraBackground>
            <main className="flex flex-col items-center justify-between relative gap-4">
                <TypewriterEffect
                    words={[
                        {
                            text: "Chess3",
                        },
                    ]}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                >
                    <Web3Connect />
                </motion.div>
            </main>
        </AuroraBackground>
    );
};

export default Home;
