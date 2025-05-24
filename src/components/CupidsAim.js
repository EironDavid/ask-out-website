import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -20px) rotate(5deg);
  }
  50% {
    transform: translate(0, -30px) rotate(0deg);
  }
  75% {
    transform: translate(-20px, -20px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

const shoot = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(var(--targetX), var(--targetY)) rotate(var(--rotation));
    opacity: 0;
  }
`;

const GameContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const GameArea = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

const TargetHeart = styled.div`
  position: absolute;
  font-size: 40px;
  animation: ${float} 4s infinite ease-in-out;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  transition: all 0.3s ease;
  cursor: pointer;
  filter: drop-shadow(0 0 10px rgba(255, 182, 193, 0.8));
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  animation: ${shoot} 1s forwards;
  opacity: 0;
`;

const Bow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;

const Message = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1001;
  animation: ${float} 2s infinite ease-in-out;
`;

const CupidsAim = ({ onComplete }) => {
  const [round, setRound] = useState(1);
  const [heartPosition, setHeartPosition] = useState({ left: 50, top: 50 });
  const [showMessage, setShowMessage] = useState(false);
  const gameAreaRef = useRef(null);

  const moveHeart = () => {
    const newLeft = Math.random() * 70 + 15;
    const newTop = Math.random() * 50 + 20;
    setHeartPosition({ left: newLeft, top: newTop });
  };

  const shootArrow = (e) => {
    const arrow = document.createElement('div');
    arrow.innerHTML = '🏹';
    arrow.style.setProperty('--targetX', `${heartPosition.left - 50}%`);
    arrow.style.setProperty('--targetY', `${heartPosition.top - 50}%`);
    arrow.style.setProperty('--rotation', `${Math.random() * 30 - 15}deg`);
    
    const gameArea = gameAreaRef.current;
    gameArea.appendChild(arrow);

    setTimeout(() => {
      gameArea.removeChild(arrow);
      
      if (round < 3) {
        moveHeart();
        setRound(prev => prev + 1);
      } else {
        setShowMessage(true);
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 1000);
  };

  useEffect(() => {
    moveHeart();
  }, []);

  return (
    <GameContainer>
      <GameArea ref={gameAreaRef}>
        <TargetHeart
          left={heartPosition.left}
          top={heartPosition.top}
          onClick={moveHeart}
        >
          ❤️
        </TargetHeart>
        <Bow onClick={shootArrow}>🏹</Bow>
      </GameArea>
      {showMessage && (
        <Message>
          ❤️ Will you go out with me now?
        </Message>
      )}
    </GameContainer>
  );
};

export default CupidsAim; 