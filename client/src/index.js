import React from 'react';
import ReactDOM from 'react-dom/client';
import AnimCursor from './components/AnimCursor';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AnimCursor />
      <App/>
  </React.StrictMode>
);
