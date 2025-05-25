import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import BackButton from '../components/BackButton';
import Confetti from '../components/Confetti';
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
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  &:hover {
    background: linear-gradient(45deg, #00f2fe, #4facfe);
  }
`;

const NoButton = styled(Button)`
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  &:hover {
    background: linear-gradient(45deg, #00f2fe, #4facfe);
  }
  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const Heart = styled.span`
  color: #ff69b4;
  font-size: 1.2em;
  margin: 0 5px;
  animation: ${css`${float} 2s infinite ease-in-out`};
  display: inline-block;
`;

const NoResponseSequence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ResponseImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ResponseMessage = styled.div`
  color: #2c3e50;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 20px;
  animation: ${fadeIn} 0.5s ease-out;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 15px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ResponsePage = ({ 
  audio, 
  currentSongIndex, 
  setCurrentSongIndex, 
  isPlaying, 
  setIsPlaying,
  onNext,
  onPrevious 
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [showNoSequence, setShowNoSequence] = useState(false);
  
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

  const handleNoClick = () => {
    if (noClickCount < 4) {
      setShowNoSequence(true);
      setNoClickCount(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate('/date-type');
    }, 2000);
  };

  const handleChangeMind = () => {
    setNoClickCount(0);
    setShowNoSequence(false);
  };

  const getNoResponseContent = () => {
    switch (noClickCount) {
      case 1:
        return {
          image: require('../media/no1.jpg'),
          message: "Are you sure?"
        };
      case 2:
        return {
          image: require('../media/no2.jpg'),
          message: "At least give me a chance beautiful"
        };
      case 3:
        return {
          image: require('../media/no3.jpg'),
          message: "Come on gor wait how do you spell gorjoeus"
        };
      case 4:
        return {
          image: require('../media/no4.jpg'),
          message: "okayy:(("
        };
      default:
        return null;
    }
  };

  const noResponseContent = getNoResponseContent();

  const navigate = useNavigate();

  return (
    <Container>
      <BackButton />
      {showConfetti && <Confetti />}
      {!showNoSequence && (
        <Question>
          Would you like to go out with me? <Heart>💝</Heart>
        </Question>
      )}
      {showNoSequence && noResponseContent && (
        <NoResponseSequence>
          <ResponseImage src={noResponseContent.image} alt="Response" />
          <ResponseMessage>{noResponseContent.message}</ResponseMessage>
        </NoResponseSequence>
      )}
      <ButtonContainer>
        {!showNoSequence ? (
          <>
            <YesButton onClick={handleYesClick}>
              Yes! <Heart>💖</Heart>
            </YesButton>
            <NoButton onClick={handleNoClick}>
              No <Heart>💔</Heart>
            </NoButton>
          </>
        ) : noClickCount < 4 ? (
          <>
            <YesButton onClick={handleNoClick}>
              Yes I don't wanna go out with you
            </YesButton>
            <NoButton onClick={handleChangeMind}>
              No I change my mind
            </NoButton>
          </>
        ) : (
          <BackButton onClick={() => navigate('/')}>
            Back to Home
          </BackButton>
        )}
      </ButtonContainer>
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

export default ResponsePage; 