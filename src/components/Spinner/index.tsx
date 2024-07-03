import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
 0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;

const Spinner: React.FC = () => {
  return <Loader />;
};

export default Spinner;