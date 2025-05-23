import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const Button = styled.button`
  padding: 15px 40px;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Hey there! 👋</Title>
      <Message>
        I've been thinking about you a lot lately, and I'd love to take you out sometime.
        Would you like to go on a date with me?
      </Message>
      <Button onClick={() => navigate('/response')}>
        Find out my answer
      </Button>
    </Container>
  );
};

export default HomePage; 