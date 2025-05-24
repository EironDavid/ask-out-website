import React from 'react';
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

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Message = styled.div`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Heart = styled.span`
  font-size: 3rem;
  animation: ${float} 2s infinite ease-in-out;
  display: inline-block;
`;

const DateTypePage = () => {
  return (
    <Container>
      <BackButton />
      <Title>YAY! 🎉</Title>
      <Message>
        <div>Okay miss ma'am, I'll go set it now! 💝</div>
        <Heart>❤️</Heart>
      </Message>
    </Container>
  );
};

export default DateTypePage; 