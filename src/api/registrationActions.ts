import axios from 'axios';
import { Registration } from '~/types/types';
import { apiUrl } from '~/config/config';

export const getRegistrationsAction = async () => {
  try {
    const response = await axios.get(`${apiUrl}/registrations`);
    return response.data;
  } catch (error) {
    return `Error fetching registrations: ${error}`;
  }
};

export const getRegistrationByCpfAction = async (cpf: string) => {
  try {
    const response = await axios.get(`${apiUrl}/registrations?cpf=${cpf}`);
    return response.data;
  } catch (error) {
    `Error fetching registration by CPF: ${error}`;
  }
};

export const createRegistrationAction = async (data: Registration) => {
  try {
    return await axios.post(`${apiUrl}/registrations`, data);
  } catch (error) {
    return `Error posting registration status: ${error}`;
  }
};

export const updateRegistrationStatusAction = async (data: Registration, status: 'REVIEW' | 'REPROVED' | 'APPROVED') => {

  try {
    const response = await axios.put(`${apiUrl}/registrations/${data.id}`, { ...data, status });
    return response.data;
  } catch (error) {
    return `Error updating registration status: ${error}`;
  }
};

export const deleteRegistrationAction = async (data: Registration) => {
  try {
    return await axios.delete(`${apiUrl}/registrations/${data.id}`);
  } catch (error) {
    return `Error deleting registration: ${error}`;
  }
};
