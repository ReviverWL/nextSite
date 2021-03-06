import React, { useEffect, lazy, Suspense } from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import style from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Preloader from './utility_components/Preloader'
import {changeReadiness} from './redux/main-reduser'
const UsersContainer = lazy (()=>import ( './components/Users/UsersContainer'))
const ProfileContainer = lazy(()=>import  ('./components/Profile/ProfileContainer'))

const App = ({readiness, changeReadiness}) => {
  useEffect(()=>{
    changeReadiness()
  }, [readiness, changeReadiness])

    if(!readiness){
      return <Preloader/>
    }
    return (
      <HashRouter>
        <div className={style.appWrapper}>
          <HeaderContainer />
          <Sidebar />
          <Suspense fallback={<div>Loading</div>}>
          <Route exaxt path='/' />
          <Route exact path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <Dialogs />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/ミク' render={() => <Music />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/authentification' render={() => <Login />} />
          </Suspense>
        </div>
      </HashRouter>
    )
}

const mapStateToProps = (state)=>{
  return{
    readiness: state.core.readiness
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {changeReadiness}),
)(App)
