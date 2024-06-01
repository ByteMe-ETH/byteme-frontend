'use client'
import React from "react";
import Link from "next/link";
import { CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { address, isConnected } = useWeb3ModalAccount();
    const { open } = useWeb3Modal();

    const menuItems = ["Home", "Leaderboard", "Collection", "Wagers"];

    // Stagger children animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        },
        exit: { opacity: 0 }
    };

    // Individual item animation
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    return (
        <header className="w-full h-full fixed top-0 right-0 z[-50] hidden md:block">
            <AnimatePresence>
                {isConnected && address && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 1 }}
                            className="absolute top-12 right-12 flex items-center gap-x-4"
                        >
                            <Button variant={'ghost'}
                                    className="hover:bg-transparent flex items-center gap-x-2 px-4 py-2 rounded-lg"
                                    onClick={() => open()}
                            >
                                <CircleUser className="hover:text-gray-300 transition-colors duration-200 ease-in-out transform hover:scale-110" size={28} />
                            </Button>
                            <p className={"text-lg"}>{`${address.slice(0, 6)}...${address.slice(-6)}`}</p>
                        </motion.div>
                        <motion.nav
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                            className="absolute right-12 top-1/2 transform -translate-y-1/2"
                        >
                            <ul className="flex flex-col items-end gap-y-2 text-xl">
                                {menuItems.map((item, index) => (
                                    <motion.li key={index} variants={itemVariants}>
                                        <Link href={`/${item === "Home" ? "" : item}`}>
                                            <p className="hover:text-gray-300 transition-colors duration-200 ease-in-out cursor-pointer">
                                                {item}
                                            </p>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
