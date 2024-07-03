import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Button";
import { IconButton } from "~/components/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { useContext, useState } from "react";
import { useRegistrationActions } from "~/hooks/useRegistrationActions";
import { cpfMask } from "~/utils/cpfMask";
import { cpfFormatter } from "~/utils/cpfFormatter";
import { RegistrationContext } from "~/contexts/RegistrationContext";

export const SearchBar = () => {
  const { registrations } = useContext(RegistrationContext);
  const { getRegistrations, getRegistrationByCpf } = useRegistrationActions();
  const [cpfValue, setCpfValue] = useState("");
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const filterCPF = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    const maskedCPF = cpfMask(inputValue);
    setCpfValue(maskedCPF);

    const numericCPF = cpfFormatter(inputValue)

    if (numericCPF.length === 11) {
      getRegistrationByCpf(numericCPF);
    }

    if(numericCPF.length === 0) {
      getRegistrations();
    }
  }

  
  return (
    <>
    <S.Container>
      <TextField placeholder="Digite um CPF válido" maxLength={14} value={cpfValue} onChange={filterCPF} error={cpfValue.length>= 1 && cpfValue.length < 14 ? 'CPF precisa conter 11 dígitos' : '' } />
      <S.Actions>
      <IconButton aria-label="refetch">
          <HiRefresh onClick={getRegistrations} />
        </IconButton>
        <Button size="large" onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
    {cpfValue.length === 14 && <S.FilterInformations>Número de registros encontrados para esse CPF: {registrations.length}</S.FilterInformations>}
    </>
  );
};
