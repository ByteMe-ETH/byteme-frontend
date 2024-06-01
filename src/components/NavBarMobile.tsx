'use client'
import React, {useState} from "react";
import Link from "next/link";
import {CircleUser} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useWeb3Modal, useWeb3ModalAccount} from "@web3modal/ethers5/react";
import {motion, AnimatePresence} from 'framer-motion';

const Navbar = () => {
    const {address, isConnected} = useWeb3ModalAccount();
    const {open} = useWeb3Modal();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Home", "Leaderboard", "Collection", "Wagers"];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        isConnected && (
            <header className="w-full fixed top-0 z-50 md:hidden">
                <div className="flex justify-between items-center p-8">
                    <motion.div
                        className="z-50 cursor-pointer"
                        onClick={toggleMenu}
                        animate={isOpen ? 'open' : 'closed'}
                        variants={{
                            open: {
                                rotate: 0,
                            },
                            closed: {
                                rotate: 0,
                            }
                        }}
                    >
                        {/* Hamburger lines transform into 'X' */}
                        <div className="space-y-2">
                            <motion.span
                                className="block w-8 h-0.5 bg-black"
                                variants={{
                                    open: {rotate: 45, transformOrigin: "top left"},
                                    closed: {rotate: 0, transformOrigin: "top left"}
                                }}
                            />
                            <motion.span
                                className="block w-8 h-0.5 bg-black"
                                variants={{
                                    open: {opacity: 0},
                                    closed: {opacity: 1}
                                }}
                            />
                            <motion.span
                                className="block w-8 h-0.5 bg-black"
                                variants={{
                                    open: {rotate: -45, transformOrigin: "bottom left"},
                                    closed: {rotate: 0, transformOrigin: "bottom left"}
                                }}
                            />
                        </div>
                    </motion.div>
                    <div className="absolute top-0 right-0 flex items-center m-6">
                        <Button variant={'ghost'}
                                className="hover:bg-transparent flex items-center gap-x-2 px-4 py-2 rounded-lg"
                                onClick={() => open()}
                        >
                            <CircleUser
                                className="hover:text-gray-300 transition-colors duration-200 ease-in-out transform hover:scale-110"
                                size={28}/>
                        </Button>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.nav
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                className="fixed top-0 right-0 bottom-0 w-full backdrop-blur-md"
                                transition={{type: 'just'}}
                            >
                                <ul className="flex flex-col items-center justify-center h-full">
                                    {menuItems.map((item, index) => (
                                        <motion.li key={index} onClick={toggleMenu}>
                                            <Link href={`/${item === "Home" ? "" : item}`}>
                                                <p className="text-xl hover:text-gray-300 p-4">{item}</p>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        )
    );
};

export default Navbar;
