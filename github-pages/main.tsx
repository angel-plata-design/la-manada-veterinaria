import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import Home from '../app/page';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Home />
    </StrictMode>,
  );
}
