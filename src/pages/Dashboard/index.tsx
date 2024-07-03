import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { RegistrationProvider } from "~/contexts/RegistrationContext";

const DashboardPage = () => {
  return (
    <RegistrationProvider>
    <S.Container>
      <SearchBar />
      <Collumns />
    </S.Container>
    </RegistrationProvider>
  );
};
export default DashboardPage;
