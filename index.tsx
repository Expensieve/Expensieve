import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootDiv = document.getElementById('app')!;

const root = createRoot(rootDiv);
root.render(<App />);
