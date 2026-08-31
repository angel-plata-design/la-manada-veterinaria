import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './src/globals.css';
import Home from './src/page';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Home />
    </StrictMode>,
  );
}
