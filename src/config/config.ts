if (!import.meta.env.VITE_API_URL) {
  throw new Error('REACT_APP_API_URL não está definido no arquivo .env');
}

export const apiUrl = import.meta.env.VITE_API_URL;