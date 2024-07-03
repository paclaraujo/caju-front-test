import axios from "axios";
import { createContext, useState, useEffect, ReactNode } from "react";
import { Registration, RegistrationContextType } from '~/types/types';

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationContext = createContext<RegistrationContextType>({registrations: [], setRegistrations: () => {}, isLoading: false, setIsLoading: () => {}});
export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!import.meta.env.VITE_API_URL) {
    throw new Error('REACT_APP_API_URL não está definido no arquivo .env');
  }
  const apiUrl = import.meta.env.VITE_API_URL;

  const getRegistrations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/registrations`);
      setRegistrations(response.data);
    } catch (error) {
      return `Error fetching registrations: ${error}`;
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    getRegistrations();
  },[])

  return (
    <RegistrationContext.Provider value={{registrations, setRegistrations, isLoading, setIsLoading}}>
      {children}
    </RegistrationContext.Provider>
  );
};