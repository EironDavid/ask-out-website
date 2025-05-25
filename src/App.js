import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import ResponsePage from './pages/ResponsePage';
import DateTypePage from './pages/DateTypePage';
import MessagesPage from './pages/MessagesPage';
import GlowingHearts from './components/GlowingHearts';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
`;

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    const playlist = [
      {
        title: "Just the Way You Are",
        file: require('./media/Just the Way You Are.mp3')
      },
      {
        title: "Miss Independent",
        file: require('./media/Miss Independent.mp3')
      },
      {
        title: "Paris",
        file: require('./media/Paris.mp3')
      },
      {
        title: "To the Bone",
        file: require('./media/To the Bone.mp3')
      }
    ];
    const a = new Audio(playlist[0].file);
    a.volume = 0.07;
    return a;
  });

  const playNextSong = async (index) => {
    try {
      audio.src = require(`./media/${[
        'Just the Way You Are.mp3',
        'Miss Independent.mp3',
        'Paris.mp3',
        'To the Bone.mp3'
      ][index]}`);
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Error playing next song:", error);
    }
  };

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio autoplay failed:", error);
        document.addEventListener('click', () => {
          audio.play().then(() => setIsPlaying(true));
        }, { once: true });
      }
    };
    
    playMusic();

    audio.addEventListener('ended', () => {
      setCurrentSongIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 4;
        playNextSong(nextIndex);
        return nextIndex;
      });
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      audio.removeEventListener('ended', () => {});
    };
  }, [audio]);

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % 4;
    setCurrentSongIndex(nextIndex);
    playNextSong(nextIndex);
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + 4) % 4;
    setCurrentSongIndex(prevIndex);
    playNextSong(prevIndex);
  };

  return (
    <Router>
      <AppContainer>
        <GlowingHearts />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={
            <MessagesPage 
              audio={audio}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onNext={handleNextSong}
              onPrevious={handlePreviousSong}
            />
          } />
          <Route path="/response" element={
            <ResponsePage 
              audio={audio}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onNext={handleNextSong}
              onPrevious={handlePreviousSong}
            />
          } />
          <Route path="/date-type" element={
            <DateTypePage 
              audio={audio}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onNext={handleNextSong}
              onPrevious={handlePreviousSong}
            />
          } />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App; 