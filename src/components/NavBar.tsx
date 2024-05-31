'use client'
import React from "react";
import Link from "next/link";
import {CircleUser} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useWeb3Modal, useWeb3ModalAccount} from "@web3modal/ethers5/react";
import {cn} from "@/lib/utils";

const Navbar = () => {
    const {address, isConnected, chainId} = useWeb3ModalAccount();
    const {open} = useWeb3Modal();

    const menuItems = ["Home"];
    if (isConnected) {
        menuItems.push("Leaderboard", "Collection");
    }

    return (
        <header className="w-full h-20 fixed top-0 z-50">
            <div className="container mx-auto px-4 h-full flex justify-between items-center">
                <nav>
                    <ul className="hidden md:flex gap-x-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={`/${item === "Home" ? "" : item}`}>
                                    <p className="hover:text-gray-300 transition-colors duration-200 ease-in-out">
                                        {item}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {isConnected && address && (
                    <div className="flex gap-x-6 items-center">
                        <Button variant={'ghost'}
                                className={cn(
                                    "hover:bg-transparent",
                                    "flex",
                                    "items-center",
                                    "gap-x-2",
                                    "px-4",
                                    "py-2",
                                    "rounded-lg"
                                )}
                                onClick={() => open()}
                        >
                            <CircleUser className={
                                cn(
                                    "hover:text-gray-300",
                                    "transition-colors",
                                    "duration-200",
                                    "ease-in-out",
                                    "transform",
                                    "hover:scale-110"
                                )
                            } size={24}/>
                        </Button>
                        <p>{`${address.slice(0, 4)}...${address.slice(-4)}`}</p>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
