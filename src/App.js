import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import ResponsePage from './pages/ResponsePage';
import DateTypePage from './pages/DateTypePage';
import GlowingHearts from './components/GlowingHearts';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlowingHearts />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/response" element={<ResponsePage />} />
          <Route path="/date-type" element={<DateTypePage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App; 