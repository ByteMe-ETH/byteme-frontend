import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {useWeb3ModalAccount} from '@web3modal/ethers5/react';

interface WagerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WagerModal({isOpen, onClose}: WagerModalProps) {
    const router = useRouter();
    const {address, isConnected} = useWeb3ModalAccount();
    const [opponentAddress, setOpponentAddress] = useState('');
    const [wagerAmount, setWagerAmount] = useState('');
    const [gameType, setGameType] = useState('');

    const handleConfirm = () => {
        console.log("Wager Confirmed with opponent:", opponentAddress, "for", wagerAmount, "ETH in", gameType);
        onClose();
        // Further action or redirection could be placed here
        router.push('/Board');  // Redirect to a specific confirmation page
    };

    const animationVariants = {
        initial: {scale: 0.5, opacity: 0},
        animate: {scale: 1, opacity: 1},
        exit: {scale: 0.5, opacity: 0},
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center w-full backdrop-blur-md h-screen"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animationVariants}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                >
                    <div className="backdrop-blur-sm absolute inset-0" onClick={onClose}/>
                    <motion.div
                        className="relative w-full max-w-md rounded-lg p-8"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2, delay: 0.1}}
                    >
                        <h3 className="text-lg font-semibold text-center mb-4">Create a Wager</h3>
                        <form className="flex flex-col items-center justify-center">
                            <input
                                type="number"  // Ensuring input type is number for ETH amount
                                value={wagerAmount}
                                onChange={(e) => setWagerAmount(e.target.value)}
                                placeholder="Wager amount in ETH"
                                className="mb-4 p-2 w-full border rounded"
                            />
                            <input
                                type="text"
                                value={gameType}
                                onChange={(e) => setGameType(e.target.value)}
                                placeholder="Game type"
                                className="mb-4 p-2 w-full border rounded"
                            />
                            <input
                                type="text"
                                value={opponentAddress}
                                onChange={(e) => setOpponentAddress(e.target.value)}
                                placeholder="Opponent's ETH Address"
                                className="mb-4 p-2 w-full border rounded"
                            />
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={handleConfirm}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}