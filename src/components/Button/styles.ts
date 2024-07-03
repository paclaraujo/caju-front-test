import styled, { css } from 'styled-components';

const buttonVariantStyles = {
  review: '#ff8858',
  approve: 'rgb(155, 229, 155)',
  reprove: 'rgb(255, 145, 154)'
};

export type ButtonProps = {
  size?: 'large' | 'small';
  variant?: 'review' | 'approve' | 'reprove';
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const largeButtonStyles = css`
  display: flex;
  align-items: center;
  padding: 8px 32px;
  background-color: #64a98c;
  height: 56px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 36px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const smallButtonStyles = css<ButtonProps>`
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 16px;
  background-color: ${({variant}) => variant ? buttonVariantStyles[variant] : 'none'};
  color: ${(props) => props.color ?? '#000'};
`;

export const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  cursor: pointer;
  ${(props) => (props.size === 'large' ? largeButtonStyles : smallButtonStyles)}
`;