import React from 'react';
import * as axios from 'axios'
import { connect } from 'react-redux';
import {setCurrentUser} from '../../redux/auth-reduser'
import { fetchStatus } from '../../redux/users-reduser';
import Header from './Header';

class HeaderCont extends React.Component {
    componentDidMount(){
        this.props.fetchStatus(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then(response=>{
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                this.props.setCurrentUser(id, email, login)
            }
            this.props.fetchStatus(false)
        })
    }

    render(){
    return <Header email={this.props.email} login={this.props.login} authStatus={this.props.authStatus}/>
    }
};

const mapStateToProps=(state)=>{
    return{
        login: state.auth.login,
        email: state.auth.email,
        authStatus: state.auth.authStatus
    }
}
const HeaderContainer = connect(mapStateToProps, {fetchStatus, setCurrentUser})(HeaderCont)
export default HeaderContainer