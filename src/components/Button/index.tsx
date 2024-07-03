import React from "react";
import * as S  from './styles';


const Button: React.FC<S.ButtonProps> = ({ size = "large", variant, color, children, ...props}) => {
  return (
    <S.StyledButton size={size} variant={variant} color={color} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
