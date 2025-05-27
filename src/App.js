import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: black;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  margin: 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        This page has been taken down by the creator.
      </Container>
    </>
  );
}

export default App; 