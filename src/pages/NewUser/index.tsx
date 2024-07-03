import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Button";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { useForm, SubmitHandler } from "react-hook-form";
import cpfCheck from "cpf-check";
import { cpfMask } from "~/utils/cpfMask";
import { useRegistrationActions } from "~/hooks/useRegistrationActions";
import { cpfFormatter } from "~/utils/cpfFormatter";
import { ModalContext } from '~/contexts/ModalContext';
import { useContext } from "react";

interface IFormInput {
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
}

const NewUserPage = () => {
  const { createRegistration } = useRegistrationActions();
  const { setModalOptions } = useContext(ModalContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<IFormInput>();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data)  => {
    setModalOptions({
      show: true,
      children: <p>Tem certerza que deseja criar este registro?</p>,
      handleOnConfirm: async () => {
        try {
          await createRegistration({
            ...data,
            status: "REVIEW",
            cpf: cpfFormatter(data.cpf),
            admissionDate: new Date(data.admissionDate).toLocaleDateString("pt-BR"),
          });
          goToHome();
        } catch (error) {
          console.error("Error creating registration:", error);
          return error;
        }
      }
    })
  }

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maskedCPF = cpfMask(e.target.value);
    setValue("cpf", maskedCPF, { shouldValidate: true });
    clearErrors("cpf");
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder="Nome"
            label="Nome"
            {...register("employeeName", {
              required: "Nome é obrigatório",
              validate: {
                validName: (value) =>
                  /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(value) || "Nome inválido",
              },
            })}
            error={errors.employeeName?.message}
          />
          <TextField
            placeholder="Email"
            label="Email"
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
            })}
            error={errors.email?.message}
          />
          <TextField
            placeholder="CPF"
            label="CPF"
            {...register("cpf", {
              required: "CPF é obrigatório",
              validate: {
                validCPF: (value) =>
                  cpfCheck.validate(value.replace(/\D/g, "")) || "CPF inválido",
              },
            })}
            onChange={handleCPFChange}
            error={errors.cpf?.message}
          />
          <TextField
            label="Data de admissão"
            type="date"
            {...register("admissionDate", {
              required: "Data de admissão é obrigatória",
            })}
            error={errors.admissionDate?.message}
          />
          <Button size="large" type="submit">
            Cadastrar
          </Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
