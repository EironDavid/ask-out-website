import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
`;

const glow = keyframes`
  0% {
    filter: drop-shadow(0 0 5px rgba(255, 182, 193, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(255, 182, 193, 0.8));
  }
  100% {
    filter: drop-shadow(0 0 5px rgba(255, 182, 193, 0.5));
  }
`;

const HeartsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Heart = styled.div`
  position: absolute;
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  animation: ${float} ${props => props.duration}s infinite ease-in-out,
             ${glow} 2s infinite ease-in-out;
  opacity: 0.3;
  transform-origin: center;
`;

const generateHearts = () => {
  const hearts = [];
  const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#db7093'];
  
  for (let i = 0; i < 15; i++) {
    hearts.push({
      id: i,
      size: Math.random() * 20 + 20, // 20-40px
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 3 + 3, // 3-6s
      delay: Math.random() * 2 // 0-2s
    });
  }
  
  return hearts;
};

const GlowingHearts = () => {
  const hearts = generateHearts();

  return (
    <HeartsContainer>
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          size={heart.size}
          color={heart.color}
          duration={heart.duration}
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: `${heart.delay}s`
          }}
        >
          ❤️
        </Heart>
      ))}
    </HeartsContainer>
  );
};

export default GlowingHearts; 