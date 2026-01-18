import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { networkEnvironment } from '../environment';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={networkEnvironment}>
      <Suspense fallback={'잠시만 기다려주세요'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </StrictMode>,
);
