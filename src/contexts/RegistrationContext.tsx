import { createContext, useState, useEffect, ReactNode } from 'react';
import { Registration, RegistrationContextType } from '~/types/types';
import { getRegistrationsAction } from '~/api/registrationActions';

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationContext = createContext<RegistrationContextType>({registrations: [], setRegistrations: () => {}, isLoading: false, setIsLoading: () => {}});
export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    getRegistrations();
  },[]);

  return (
    <RegistrationContext.Provider value={{registrations, setRegistrations, isLoading, setIsLoading}}>
      {children}
    </RegistrationContext.Provider>
  );
};