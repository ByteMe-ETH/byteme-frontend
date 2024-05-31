import React from 'react';
import Web3Connect from "@/hooks/Web3Connect";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-72 relative">
      {/* Background image as a separate img tag */}
      <img src="/background.jpg" alt="Chess background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -2 // Ensure the image stays behind everything
      }} />

      {/* Grey overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey with 50% opacity
        zIndex: -1 // Above the image, below the content
      }} />

      {/* Content container with higher z-index to keep it sharp */}
      <div className="z-10" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="text-writer font-bold" style={{ fontSize: '72px', textShadow: '2px 2px 0px #000' }}>Chess3</h1>
        {/* Typewriter effect on the text above */}
        
        {/* Web3Connect component centered */}
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Web3Connect />
        </div>
      </div>
    </main>
  );
};

export default Home;
