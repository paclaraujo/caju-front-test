import axios from 'axios';
import {
  getRegistrationsAction,
  getRegistrationByCpfAction,
  createRegistrationAction,
  updateRegistrationStatusAction,
  deleteRegistrationAction
} from './registrationActions';
import { Registration } from '~/types/types';
import { apiUrl } from '~/config/config';


jest.mock('axios');
jest.mock('~/config/config', () => ({
  apiUrl: 'http://example.test',
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;


const mockData: Registration = { id: 1, employeeName: 'John Doe', cpf: '12345678900', status: 'APPROVED', email: 'test@test.com', admissionDate: '10/11/1999' };

describe('API functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch registrations', async () => {
    const mockData = [{ id: 1, name: 'John Doe' }];
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const registrations = await getRegistrationsAction();
    expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/registrations`);
    expect(registrations).toEqual(mockData);
  });

  it('should handle error while fetching registrations', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    const result = await getRegistrationsAction();
    expect(result).toBe(`Error fetching registrations: Error: ${errorMessage}`);
  });

  it('should fetch registration by CPF', async () => {
    const mockData = { id: 1, name: 'John Doe' };
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const registration = await getRegistrationByCpfAction('12345678900');
    expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/registrations?cpf=12345678900`);
    expect(registration).toEqual(mockData);
  });

  it('should handle error while fetching registration by CPF', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    const result = await getRegistrationByCpfAction('12345678900');
    expect(result).toBeUndefined();
  });

  it('should create a registration', async () => {
    mockedAxios.post.mockResolvedValue({ data: mockData });

    const result = await createRegistrationAction(mockData);
    expect(axios.post).toHaveBeenCalledWith(`${apiUrl}/registrations`, mockData);
    expect(result).toEqual({ data: mockData });
  });

  it('should handle error while creating a registration', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.post.mockRejectedValue(new Error(errorMessage));

    const result = await createRegistrationAction(mockData);
    expect(result).toBe(`Error posting registration status: Error: ${errorMessage}`);
  });

  it('should update a registration status', async () => {
    mockedAxios.put.mockResolvedValue({ data: mockData });

    const result = await updateRegistrationStatusAction(mockData, 'APPROVED');
    expect(axios.put).toHaveBeenCalledWith(`${apiUrl}/registrations/${mockData.id}`, { ...mockData, status: 'APPROVED' });
    expect(result).toEqual(mockData);
  });

  it('should handle error while updating a registration status', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.put.mockRejectedValue(new Error(errorMessage));

    const result = await updateRegistrationStatusAction(mockData, 'APPROVED');
    expect(result).toBe(`Error updating registration status: Error: ${errorMessage}`);
  });

  it('should delete a registration', async () => {
    mockedAxios.delete.mockResolvedValue({ status: 200 });

    const result = await deleteRegistrationAction(mockData);
    expect(axios.delete).toHaveBeenCalledWith(`${apiUrl}/registrations/1`);
    expect(result).toEqual({ status: 200 });
  });

  it('should handle error while deleting a registration', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.delete.mockRejectedValue(new Error(errorMessage));

    const result = await deleteRegistrationAction(mockData);
    expect(result).toBe(`Error deleting registration: Error: ${errorMessage}`);
  });
});