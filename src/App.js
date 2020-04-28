import React from 'react';
import Header from './components/Header'
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar/>
      <Profile/>
      </div>

  );
}

export default App;
