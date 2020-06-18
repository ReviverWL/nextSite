import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { HashRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login';


const App = (props) => {
// debugger
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <Route exact path='/profile/:userId?' render = {()=><ProfileContainer />} />
        <Route path='/dialogs' render = { ()=><Dialogs />} />
        <Route path='/news' render = {()=><News />} />
        <Route path='/ミク' render = {()=><Music />} />
        <Route path='/users' render = {()=><UsersContainer />} />
        <Route path='/settings' render = {()=><Settings />} />
        <Route path='/authentification' render ={()=><Login/>}/>
      </div>
    </HashRouter>

  );
}

export default App;
