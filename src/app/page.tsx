'use client';
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {AuroraBackground} from "@/components/ui/aurora-beams";
import {useWeb3ModalAccount} from "@web3modal/ethers5/react";
import HeroPre from "@/components/HeroPre";
import HeroPost from "@/components/HeroPost";

const Home: React.FC = () => {
    const {isConnected} = useWeb3ModalAccount();

    return (
        <AnimatePresence>
            {!isConnected && (
                <motion.div
                    key="hero-pre"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 50}}
                    transition={{duration: 0.75}}
                >
                    <HeroPre/>
                </motion.div>
            )}
            {isConnected && (
                <motion.div
                    key="hero-post"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 50}}
                    transition={{duration: 0.75}}
                >
                    <HeroPost/>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Home;

