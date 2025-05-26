import React from 'react';
import styled, { keyframes } from 'styled-components';
import BackButton from '../components/BackButton';
import MusicPlayer from '../components/MusicPlayer';
import { useNavigate } from 'react-router-dom';
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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const DateTypePage = ({ 
  audio, 
  currentSongIndex, 
  setCurrentSongIndex, 
  isPlaying, 
  setIsPlaying,
  onNext,
  onPrevious 
}) => {
  const playlist = [
    {
      title: "Just the Way You Are",
      file: require('../media/Just the Way You Are.mp3')
    },
    {
      title: "Miss Independent",
      file: require('../media/Miss Independent.mp3')
    },
    {
      title: "Paris",
      file: require('../media/Paris.mp3')
    },
    {
      title: "To the Bone",
      file: require('../media/To the Bone.mp3')
    }
  ];

  return (
    <Container>
      <BackButton />
      <Title>Thank you for your response! 💝</Title>
      <MusicPlayer 
        audio={audio} 
        currentSong={playlist[currentSongIndex].title}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </Container>
  );
};

export default DateTypePage; 