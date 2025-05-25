import React, { useState } from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SongTitle = styled.div`
  font-size: 14px;
  color: #2c3e50;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
`;

const MusicPlayer = ({ audio, currentSong, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      <ControlButton onClick={onPrevious}>⏮️</ControlButton>
      <ControlButton onClick={togglePlay}>
        {isPlaying ? '⏸️' : '▶️'}
      </ControlButton>
      <ControlButton onClick={onNext}>⏭️</ControlButton>
      <SongTitle>{currentSong}</SongTitle>
    </PlayerContainer>
  );
};

export default MusicPlayer; 