import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.primary ? '#007BFF' : '#ccc')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? '#0056b3' : '#bbb')};
  }
`;