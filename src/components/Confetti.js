import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
`;

const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`;

const ConfettiPiece = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${props => props.color};
  animation: ${fall} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  opacity: 0.8;
`;

const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#db7093', '#ff69b4', '#ff1493'];

const generateConfetti = () => {
  const pieces = [];
  for (let i = 0; i < 50; i++) {
    pieces.push({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    });
  }
  return pieces;
};

const Confetti = () => {
  const confetti = generateConfetti();

  return (
    <ConfettiContainer>
      {confetti.map(piece => (
        <ConfettiPiece
          key={piece.id}
          color={piece.color}
          left={piece.left}
          duration={piece.duration}
          delay={piece.delay}
        />
      ))}
    </ConfettiContainer>
  );
};

export default Confetti; 