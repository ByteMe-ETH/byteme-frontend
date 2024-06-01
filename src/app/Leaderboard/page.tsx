'use client'
import React, { useState } from 'react';
import { AuroraBackground } from "@/components/ui/aurora-beams";  // Ensure this component is properly imported
import { TypewriterEffect } from "@/components/ui/typewriter-effect";  // Import TypewriterEffect

interface Player {
    name: string;
    score: number;
}

const Leaderboard: React.FC = () => {
    // Configurable list of players
    const initialPlayers: Player[] = [
        { name: "Alice", score: 20 },
        { name: "Bob", score: 15 },
        { name: "Charlie", score: 25 }
    ];

    // Initialize state for players with the configurable list
    const [players, setPlayers] = useState<Player[]>(initialPlayers);

    // Function to sort players by score in descending order
    const sortPlayers = () => {
        return [...players].sort((a, b) => b.score - a.score); // Copy to avoid mutation
    };

    // Function to display the leaderboard
    const displayLeaderboard = () => {
        return sortPlayers().map((player, index) => (
            <div key={index} style={styles.playerRow}>
                <span style={styles.playerName}>{player.name}</span>
                <span style={styles.playerScore}>{player.score}</span>
                <span style={styles.medal}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}
                </span>
            </div>
        ));
    };

    return (
        <AuroraBackground>  {/* Wrapped the component content in AuroraBackground */}
            <div style={styles.container}>
                <TypewriterEffect
                    words={[
                        {
                            text: "Leaderboard",
                        },
                    ]}
                    style={styles.typewriter}  // Apply style for spacing
                />
                <div style={styles.board}>
                    {displayLeaderboard()}
                </div>
            </div>
        </AuroraBackground>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        paddingTop: '19vh'
    },
    typewriter: {
        marginBottom: '2rem',  // Additional space below the typewriter effect
    },
    board: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '70px',
        borderRadius: '50px',
        width: '1300px',
    },
    playerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        padding: '10px',
        marginBottom: '40px',
        width: '100%',
    },
    playerName: {
        textAlign: 'left',
        flex: 1
    },
    playerScore: {
        textAlign: 'right',
        flex: 1
    },
    medal: {
        fontSize: '24px',
    }
};

export default Leaderboard;
