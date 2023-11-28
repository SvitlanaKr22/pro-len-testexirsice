import '@fontsource/fira-sans/300.css';
import '@fontsource/fira-sans/500.css';
import '@fontsource/oswald/300.css';
import '@fontsource/oswald/500.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
