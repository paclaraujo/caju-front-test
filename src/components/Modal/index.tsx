import React, { ReactNode } from 'react';
import * as S from './styles';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, children, onClose, onConfirm } : ModalProps) => {

  return (
    show &&
    <S.Overlay>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.Content>
          {children}
          <S.ButtonContainer>
            <S.Button onClick={onClose}>Cancelar</S.Button>
            <S.Button primary onClick={onConfirm}>
              Confirmar
            </S.Button>
          </S.ButtonContainer>
        </S.Content>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;