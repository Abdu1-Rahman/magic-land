import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element = { <Signup/> }/>
          <Route path='/login' element= {< Login/> }/>
        </Routes>
      </Router>
  </React.StrictMode>
);
