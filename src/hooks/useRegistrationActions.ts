import { useContext } from 'react';
import { RegistrationContext } from '~/contexts/RegistrationContext';
import {
  getRegistrationsAction,
  getRegistrationByCpfAction,
  createRegistrationAction,
  updateRegistrationStatusAction,
  deleteRegistrationAction
} from '~/api/registrationActions';
import { Registration } from '~/types/types';

export const useRegistrationActions = () => {
  const { setRegistrations, setIsLoading } = useContext(RegistrationContext);

  const getRegistrations = async () => {
    setIsLoading(true);
    try {
      const response = await getRegistrationsAction();
      setRegistrations(response);
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  };

  const getRegistrationByCpf = async (cpf: string) => {
    setIsLoading(true);
    try {
      const response = await getRegistrationByCpfAction(cpf);
      setRegistrations(response);
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  };

  const createRegistration = async (data: Registration) => {
    setIsLoading(true);
    try {
      await createRegistrationAction(data);
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  };

  const updateRegistrationStatus = async (data: Registration, status: 'REVIEW' | 'REPROVED' | 'APPROVED') => {
    setIsLoading(true);
    try {
      await updateRegistrationStatusAction(data, status);
      setRegistrations((prevState) =>
        prevState.map((registration) => {
          if (registration.id === data.id) return { ...registration, status };
          return registration;
        })
      );
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  };

  const deleteRegistration = async (data: Registration) => {
    setIsLoading(true);
    try {
      await deleteRegistrationAction(data);
      setRegistrations((prevState) =>
        prevState.filter((registration) => registration.id !== data.id)
      );
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  };

  return {
    getRegistrations,
    getRegistrationByCpf: (cpf: string) => getRegistrationByCpf(cpf),
    createRegistration: (data: Registration) => createRegistration(data),
    reviewRegistration: (data: Registration) => updateRegistrationStatus(data, 'REVIEW'),
    approveRegistration: (data: Registration) => updateRegistrationStatus(data, 'APPROVED'),
    reproveRegistration: (data: Registration) => updateRegistrationStatus(data, 'REPROVED'),
    deleteRegistration: (data: Registration) => deleteRegistration(data),
  };
};