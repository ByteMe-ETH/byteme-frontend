import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,  // Delay between the animations of each child
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-[80%] w-full bg-emerald-100 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>
                    <motion.div variants={itemVariants}>
                        <EvervaultCard text={item.title}/>
                        <p className={cn("text-xs mt-4")}>
                            {item.description}
                        </p>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    );
};
