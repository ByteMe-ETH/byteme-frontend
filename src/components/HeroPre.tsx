import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import {motion} from "framer-motion";
import Web3Connect from "@/hooks/Web3Connect";
import React from "react";

const HeroPre = () => {
    return (
        <main className="flex flex-col items-center justify-between relative gap-4">
            <TypewriterEffect
                words={[
                    {
                        text: "Chess3",
                    },
                ]}
            />
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, ease: "easeInOut"}}
            >
                <Web3Connect/>
            </motion.div>
        </main>
    );
}

export default HeroPre;