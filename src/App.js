import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

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
