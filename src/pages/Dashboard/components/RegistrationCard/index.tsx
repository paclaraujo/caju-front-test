import Button from "~/components/Button";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Registration } from '~/types/types';

type Props = {
  data: Registration;
};

const RegistrationCard = ({ data } : Props) => {
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
            <Button size="small" onClick={() => {}} variant="reprove" >Reprovar</Button>
            <Button size="small" onClick={() => {}} variant="approve">Aprovar</Button> 
          </div>
        }
        
        {data.status === 'REPROVED' && <Button size="small" onClick={() => {}} variant="review">Revisar novamente</Button> }

        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
