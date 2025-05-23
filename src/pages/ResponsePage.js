import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import BackButton from '../components/BackButton';
import Confetti from '../components/Confetti';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Question = styled.h2`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 18px 45px;
  font-size: 1.3rem;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${props => props.isNo ? `scale(${props.scale})` : 'scale(1)'};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    transform: ${props => props.isNo ? `scale(${props.scale + 0.1})` : 'scale(1.1)'};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const YesButton = styled(Button)`
  background: linear-gradient(45deg, #2ecc71, #27ae60);
  &:hover {
    background: linear-gradient(45deg, #27ae60, #2ecc71);
  }
`;

const NoButton = styled(Button)`
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  &:hover {
    background: linear-gradient(45deg, #c0392b, #e74c3c);
  }
`;

const getSadEmoji = (scale) => {
  const emojis = ['😢', '😭', '💔', '😫', '😩', '😞', '😔', '😥', '😪', '😴'];
  const index = Math.min(Math.floor((scale - 1) * 2), emojis.length - 1);
  return emojis[index];
};

const ResponsePage = () => {
  const [noScale, setNoScale] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleNoClick = () => {
    setNoScale(prevScale => prevScale + 0.1);
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate('/date-type');
    }, 2000);
  };

  return (
    <Container>
      <BackButton />
      {showConfetti && <Confetti />}
      <Question>Will you go out with me? 💝</Question>
      <ButtonContainer>
        <YesButton onClick={handleYesClick}>
          Yes! 💖
        </YesButton>
        <NoButton 
          isNo={true}
          scale={noScale}
          onClick={handleNoClick}
        >
          No {getSadEmoji(noScale)}
        </NoButton>
      </ButtonContainer>
    </Container>
  );
};

export default ResponsePage; 