import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import style from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import ProfileContainer from './components/Profile/ProfileContainer'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import {getConfirmedUserData} from './redux/auth-reduser'
import { compose } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    this.props.getConfirmedUserData()
  }
  render() {
    return (
      <HashRouter>
        <div className={style.appWrapper}>
          <HeaderContainer />
          <Sidebar />
          <Route exact path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <Dialogs />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/ミク' render={() => <Music />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/authentification' render={() => <Login />} />
        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    authStatus: state.auth.authStatus
  }
}

export default compose(
  connect(mapStateToProps, {getConfirmedUserData}),
  withRouter
)(App)
