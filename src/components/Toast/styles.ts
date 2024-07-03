import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ToastContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 1;
  left: 1;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  animation: ${slideIn} 0.3s ease-in-out;
  background-color: ${(props) =>
    props.type === 'success' ? '#4CAF50' : '#F44336'};
  color: white;
  margin: 16px 0;
  width: 300px;

  ${(props) =>
    props.type === 'success' &&
    css`
      border: 1px solid #388e3c;
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      border: 1px solid #d32f2f;
    `}
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
