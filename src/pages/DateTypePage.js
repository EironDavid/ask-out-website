import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BackButton from '../components/BackButton';

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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
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
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const Button = styled.button`
  padding: 15px 40px;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const CasualButton = styled(Button)`
  background: linear-gradient(45deg, #3498db, #2980b9);
  animation: ${bounce} 2s infinite;

  &:hover {
    background: linear-gradient(45deg, #2980b9, #3498db);
  }
`;

const FancyButton = styled(Button)`
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  animation: ${bounce} 2s infinite 0.5s;

  &:hover {
    background: linear-gradient(45deg, #8e44ad, #9b59b6);
  }
`;

const Message = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
  z-index: 1000;
`;

const DateTypePage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleChoice = (type) => {
    const messages = {
      casual: "Great choice! Let's keep it casual and fun! 😊",
      fancy: "Fancy it is! Let's make it special! ✨"
    };
    setMessage(messages[type]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <Container>
      <BackButton />
      <Title>OKAY YAYYY! 🎉</Title>
      <Subtitle>What kind of date would you prefer?</Subtitle>
      <ButtonContainer>
        <CasualButton onClick={() => handleChoice('casual')}>
          Casual Date 🎮
        </CasualButton>
        <FancyButton onClick={() => handleChoice('fancy')}>
          Fancy Date 🎭
        </FancyButton>
      </ButtonContainer>
      {showMessage && <Message>{message}</Message>}
    </Container>
  );
};

export default DateTypePage; 