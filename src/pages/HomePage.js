import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const openEnvelope = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
  100% {
    transform: scale(0) rotate(10deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Envelope = styled.div`
  width: 200px;
  height: 130px;
  background: #fff;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${props => css`${float} 3s ease-in-out infinite`};
  margin-top: 20px;
  margin-bottom: 20px;
  transform-origin: center;

  ${props => props.isOpening && css`
    animation: ${openEnvelope} 1s forwards;
  `}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    border-radius: 10px;
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

const EnvelopeFlap = styled.div`
  position: absolute;
  top: -65px;
  left: 0;
  right: 0;
  height: 65px;
  background: #fff;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  transform-origin: top;
  transition: transform 0.3s ease;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);

  ${Envelope}:hover & {
    transform: rotateX(180deg);
  }
`;

const EnvelopeSeal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: #ff69b4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  transition: all 0.3s ease;

  ${Envelope}:hover & {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  animation: ${props => css`${fadeIn} 1s ease-out`};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  animation: ${props => css`${fadeIn} 1s ease-out 0.3s backwards`};
`;

const Heart = styled.span`
  color: #ff69b4;
  font-size: 1.5em;
  margin: 0 5px;
  animation: ${props => css`${float} 2s ease-in-out infinite`};
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleEnvelopeClick = () => {
    if (clickCount === 0) {
      setClickCount(1);
    } else if (clickCount === 1) {
      setIsOpening(true);
      setTimeout(() => {
        navigate('/response');
      }, 1000);
    }
  };

  return (
    <Container>
      <Title>Open Letter <Heart>💌</Heart></Title>
      <Subtitle>
        {clickCount === 0 
          ? "Inside this envelope something I should've asked long time ago"
          : "Are you sure you want to open it?"}
      </Subtitle>
      <Envelope onClick={handleEnvelopeClick} isOpening={isOpening}>
        <EnvelopeFlap />
        <EnvelopeSeal>❤️</EnvelopeSeal>
      </Envelope>
    </Container>
  );
};

export default HomePage; 