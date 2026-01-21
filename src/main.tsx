import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router';
import { networkEnvironment } from '../environment';
import App from './App';
import ErrorBoundaryWithRetry from './components/error/ErrorBoundaryWithRetry';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundaryWithRetry>
      <RelayEnvironmentProvider environment={networkEnvironment}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RelayEnvironmentProvider>
    </ErrorBoundaryWithRetry>
  </StrictMode>,
);
