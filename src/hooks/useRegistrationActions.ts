import { useContext } from 'react';
import axios from 'axios';
import { RegistrationContext } from '~/contexts/RegistrationContext';
import { Registration } from '~/types/types';

export const useRegistrationActions = () => {
  const { setRegistrations, setIsLoading } = useContext(RegistrationContext);

  const getRegistrations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/registrations');
      setRegistrations(response.data);
    } catch (error) {
      return `Error fetching registrations: ${error}`;
    }
    setIsLoading(false);
  };

  const getRegistrationByCpf = async (cpf: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/registrations?cpf=${cpf}`);
      setRegistrations(response.data);
    } catch (error) {
      `Error fetching registration by CPF: ${error}`;
    }
    setIsLoading(false);
  };

  const createRegistration = async (data: Registration) => {
    setIsLoading(true);
    try {
      return await axios.post("http://localhost:3000/registrations", data);
    } catch (error) {
      return `Error posting registration status: ${error}`;
    }
    setIsLoading(false);
  }

  const updateRegistrationStatus = async (data: Registration, status: 'REVIEW' | 'REPROVED' | 'APPROVED') => {
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:3000/registrations/${data.id}`, { ...data, status });
      setRegistrations((prevState) =>
        prevState.map((registration) => {
          if (registration.id === data.id) return { ...registration, status };
          return registration;
        })
      );
    } catch (error) {
      return `Error updating registration status: ${error}`;
    }
    setIsLoading(false);
  };

  const deleteRegistration = async (data: Registration) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/registrations/${data.id}`);
      setRegistrations((prevState) =>
        prevState.filter((registration) => registration.id !== data.id)
      );
    } catch (error) {
      return `Error deleting registration: ${error}`;
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