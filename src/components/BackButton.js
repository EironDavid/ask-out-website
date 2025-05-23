import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButtonContainer = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background: white;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <BackButtonContainer onClick={() => navigate(-1)}>
      ← Back
    </BackButtonContainer>
  );
};

export default BackButton; 