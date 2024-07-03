export interface Registration {
  id?: number;
  employeeName: string;
  email: string;
  admissionDate: string;
  cpf: string;
  status: 'REVIEW' | 'REPROVED' | 'APPROVED';
}

export interface RegistrationContextType {
  registrations: Registration[];
  setRegistrations: React.Dispatch<React.SetStateAction<Registration[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ModalContextType {
  setModalOptions: any;
}