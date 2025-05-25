import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import BackButton from '../components/BackButton';
import MusicPlayer from '../components/MusicPlayer';

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

const MessageCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  max-width: 600px;
  animation: ${props => css`${fadeIn} 1s ease-out ${props.delay}s backwards`};
  transform-origin: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const Message = styled.p`
  font-size: 1.8rem;
  color: #2c3e50;
  line-height: 1.6;
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

const Heart = styled.span`
  color: #ff69b4;
  font-size: 1.2em;
  margin: 0 5px;
  animation: ${css`${float} 2s infinite ease-in-out`};
  display: inline-block;
`;

const ContinueButton = styled.button`
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
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  margin-top: 30px;
  animation: ${css`${fadeIn} 1s ease-out 2s backwards`};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #00f2fe, #4facfe);
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const MessagesPage = ({ 
  audio, 
  currentSongIndex, 
  setCurrentSongIndex, 
  isPlaying, 
  setIsPlaying,
  onNext,
  onPrevious 
}) => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Hey Jazz! I've been wanting to tell you something for a while now...",
    "You are So exquisite, so unrefined, A masterpiece the stars designed.",
    "If you let me get to know you better, I'll be the luckiest person in the world.",
    "I’ve never had the courage to ask anyone out… but something about you pulls me in. I find myself hoping, yearning.",
    "So, I have a question for you..."
  ];

  const handleContinue = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(prev => prev + 1);
    } else {
      navigate('/response');
    }
  };

  return (
    <Container>
      <BackButton />
      <MessageCard delay={currentMessageIndex * 0.5}>
        <Message>
          {messages[currentMessageIndex]}
          {currentMessageIndex === messages.length - 1 && <Heart>💝</Heart>}
        </Message>
      </MessageCard>
      <ContinueButton onClick={handleContinue}>
        {currentMessageIndex < messages.length - 1 ? "Continue" : "See my question"}
      </ContinueButton>
      <MusicPlayer 
        audio={audio} 
        currentSong={[
          "Just the Way You Are",
          "Miss Independent",
          "Paris",
          "To the Bone"
        ][currentSongIndex]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </Container>
  );
};

export default MessagesPage; 