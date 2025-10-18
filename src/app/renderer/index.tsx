import './styles/index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from './providers';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <RouterProvider />
    </StrictMode>,
  );
}
