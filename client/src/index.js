import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import MainDashboard from './adminpages/MainDashboard'
import Settings from './adminpages/Settings'
import Users from './adminpages/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element= { <Home/> }/>
          <Route path='/signup' element = { <Signup/> }/>
          <Route path='/login' element= { < Login/> }/>
          <Route path='/dashboard' element={<MainDashboard/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
