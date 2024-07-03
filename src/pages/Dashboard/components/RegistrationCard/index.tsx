import Button from '~/components/Button';
import * as S from './styles';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { useRegistrationActions } from '~/hooks/useRegistrationActions';
import { ModalContext } from '~/contexts/ModalContext';
import { Registration } from '~/types/types';
import { useContext } from 'react';

type Props = {
  data: Registration;
};

const RegistrationCard = ({ data } : Props) => {
  const { reproveRegistration, approveRegistration, reviewRegistration, deleteRegistration } = useRegistrationActions();
  const { setModalOptions } = useContext(ModalContext);

  const openModal = (text: string, action: (data: Registration) => void) => {
    setModalOptions({
      show: true,
      children: <p>{text}</p>,
      handleOnConfirm: () => action(data)
    });
  };

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions status={data.status}>
        {
          data.status === 'REVIEW' &&
          <div>
            <Button size="small" onClick={() => openModal('Tem certerza que deseja reprovar este registro?', reproveRegistration)} variant="reprove" >Reprovar</Button>
            <Button size="small" onClick={() => openModal('Tem certerza que deseja aprovar este registro?', approveRegistration)} variant="approve">Aprovar</Button>
          </div>
        }

        {data.status === 'REPROVED' && <Button size="small" onClick={() => openModal('Tem certerza que deseja revisar este registro?', reviewRegistration)} variant="review">Revisar novamente</Button> }

        <HiOutlineTrash onClick={() => openModal('Tem certerza que deseja excluir este registro?', deleteRegistration)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
