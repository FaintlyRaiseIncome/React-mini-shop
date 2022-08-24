import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';




if (document.getElementById('reacts')) {
    createRoot(document.getElementById('reacts')).render(<App />)
}