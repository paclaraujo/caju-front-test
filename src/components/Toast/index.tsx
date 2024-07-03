import React from 'react';
import * as S from './styles';

type ToastProps = {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ show, type, message, onClose }) => {
  return (
    show &&
      <S.ToastContainer type={type}>
        {message}
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
      </S.ToastContainer>
  );
};

export default Toast;