
import * as S from './styles';
import RegistrationCard from '../RegistrationCard';
import { RegistrationContext } from '~/contexts/RegistrationContext';
import { useContext } from 'react';
import { Registration } from '~/types/types';
import Spinner from '~/components/Spinner';

const allColumns = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APPROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' },
];

const Collumns = () => {
  const { registrations, isLoading } = useContext(RegistrationContext);

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent loading={isLoading ? 'loading' : ''}>
                { isLoading ? <Spinner /> :
                  registrations?.filter((registration: Registration) => registration.status === collum.status).map((registration: Registration) => {
                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                      />
                    );
                  })
                }
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
