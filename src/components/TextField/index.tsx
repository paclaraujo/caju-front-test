import  { InputHTMLAttributes, forwardRef } from "react";
import * as S  from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <S.Input {...props} ref={ref} />
      <S.Span>{error}</S.Span>
    </div>
  )
);

export default TextField;
