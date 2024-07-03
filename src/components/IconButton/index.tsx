import * as S from './styles';

type IconButtonProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = ({children, ...props}: IconButtonProps) => {
  return (
    <S.IconButtonStyled {...props}>
      {children}
    </S.IconButtonStyled>
  );
};