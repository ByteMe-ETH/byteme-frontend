'use client'
import React, { useState } from 'react';

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
        return [...players].sort((a, b) => b.score - a.score); // Create a new array to avoid mutating the original state
    };

    // Function to display the leaderboard
    const displayLeaderboard = () => {
        const sortedPlayers = sortPlayers();
        return sortedPlayers.map((player, index) => (
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
        <div style={styles.container}>
            <h1 style={styles.title}>Leaderboard</h1>
            <div style={styles.board}>
                {displayLeaderboard()}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingTop: '19vh'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '48px',
        color: 'black',
        margin: '20px 0',
        paddingBottom: '2vh'
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
        width: '100%', // Ensures the row stretches to fit the container
    },
    playerName: {
        textAlign: 'left',
        flex: 1 // Ensures it takes up only the necessary space
    },
    playerScore: {
        textAlign: 'right',
        flex: 1
    },
    medal: {
        // Styling for the medal span
        fontSize: '24px', // Larger font size to highlight the medal
    }
};

export default Leaderboard;
