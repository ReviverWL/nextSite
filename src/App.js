import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <Route exact path='/profile' component = {Profile} />
        <Route path='/messages' render = { ()=><Dialogs />} />
        <Route path='/news' component = {News} />
        <Route path='/ミク' component = {Music} />
        <Route path='/settings' component = {Settings} />
      </div>
    </BrowserRouter>

  );
}

export default App;
