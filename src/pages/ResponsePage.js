import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
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

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
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
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  animation: ${css`${fadeIn} 1s ease-out`};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${css`${float} 3s infinite ease-in-out`};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  animation: ${css`${fadeIn} 1s ease-out 0.3s backwards`};
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 20px 50px;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-2px);
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

const Heart = styled.span`
  color: #ff69b4;
  font-size: 1.2em;
  margin: 0 5px;
  animation: ${css`${float} 2s infinite ease-in-out`};
  display: inline-block;
`;

const ResponsePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleNoClick = () => {
    // No action or you can add a message here if you want
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
      <Question>
        Would you like to go out with me? <Heart>💝</Heart>
      </Question>
      <ButtonContainer>
        <YesButton onClick={handleYesClick}>
          Yes! <Heart>💖</Heart>
        </YesButton>
        <NoButton onClick={handleNoClick}>
          No <Heart>💔</Heart>
        </NoButton>
      </ButtonContainer>
    </Container>
  );
};

export default ResponsePage; 