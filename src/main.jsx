import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import NotesContextProvider from './context/NotesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </MantineProvider>
  </React.StrictMode>,
);
