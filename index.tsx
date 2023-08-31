import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootDiv = document.getElementById('app');

if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(<App />);
}
