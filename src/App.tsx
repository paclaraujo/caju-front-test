import Router from '~/router';
import { Header } from './components/Header';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </ModalProvider>
  );
}

export default App;
