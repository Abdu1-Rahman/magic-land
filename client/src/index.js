import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Admin from './adminpages/Admin';
import Home from './pages/Home'
import MainDashboard from './adminpages/MainDashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element= { <Home/> }/>
          <Route path='/signup' element = { <Signup/> }/>
          <Route path='/login' element= { < Login/> }/>
          <Route path='/adminpage' element={ <Admin/> }/>
          <Route path='/dashboard' element={<MainDashboard/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
