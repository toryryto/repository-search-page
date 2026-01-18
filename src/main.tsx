import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { networkEnvironment } from '../environment';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={networkEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  </StrictMode>,
);
