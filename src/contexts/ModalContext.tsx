import { createContext, useState, ReactNode } from 'react';
import Modal from '~/components/Modal';
import Toast from '~/components/Toast';
import { ModalContextType } from '~/types/types';

interface ModalProviderProps {
  children: ReactNode;
}

type ToastType = 'success' | 'error';

export const ModalContext = createContext<ModalContextType>({setModalOptions: () => {}});
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [toastOptions, setToastOptions] = useState({show: false, message: '', type: 'sucess' as ToastType});
  const [modalOptions, setModalOptions] = useState({ show: false, children: null, handleOnConfirm: () => {}});


  const onModalClose = () => {
    setModalOptions( prevState => ({...prevState, show: false}));
  };

  const onModalConfirm = async () => {

    try {
      modalOptions.handleOnConfirm();
      setToastOptions({show: true, message: 'Operação concluída com sucesso', type: 'success'});
    } catch (error) {
      setToastOptions({show: true, message: 'Erro ao realizar a operação', type: 'error'});
    }

    setModalOptions( prevState => ({...prevState, show: false}));
  };

  const onToastClose = () => {
    setToastOptions( prevState => ({...prevState, show: false}));
  };

  return (
    <ModalContext.Provider value={{ setModalOptions }}>
      {children}
      <Modal show={modalOptions.show} onClose={onModalClose} onConfirm={onModalConfirm}> {modalOptions.children} </Modal>
      <Toast type={toastOptions.type} show={toastOptions.show} message={toastOptions.message} onClose={onToastClose}/>
    </ModalContext.Provider>
  );
};