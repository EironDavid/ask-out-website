import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import BackButton from '../components/BackButton';
import Confetti from '../components/Confetti';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Question = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const Button = styled.button`
  padding: 15px 40px;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${props => props.isNo ? `scale(${props.scale})` : 'scale(1)'};

  &:hover {
    transform: ${props => props.isNo ? `scale(${props.scale + 0.1})` : 'scale(1.1)'};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const YesButton = styled(Button)`
  background: linear-gradient(45deg, #2ecc71, #27ae60);
`;

const NoButton = styled(Button)`
  background: linear-gradient(45deg, #e74c3c, #c0392b);
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