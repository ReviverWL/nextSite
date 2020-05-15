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
// debugger
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <Route exact path='/profile' render = {()=><Profile store= {props.store} dispatch={props.dispatch}/>} />
        <Route path='/dialogs' render = { ()=><Dialogs dialogs = {props.store.dialogsPage}/>} />
        <Route path='/news' render = {()=><News />} />
        <Route path='/ミク' render = {()=><Music />} />
        <Route path='/settings' render = {()=><Settings />} />
      </div>
    </BrowserRouter>

  );
}

export default App;
