import React from 'react';
import {authDAL} from '../../api/api'
import { connect } from 'react-redux';
import {setCurrentUser} from '../../redux/auth-reduser'
import { fetchStatus } from '../../redux/users-reduser'
import Header from './Header';

class HeaderCont extends React.Component {
    componentDidMount(){
        this.props.fetchStatus(true)
        this.props.authDAL.confirmedUserData()
        .then(data=>{
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
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
        authStatus: state.auth.authStatus,
        authDAL
    }
}
const HeaderContainer = connect(mapStateToProps, {fetchStatus, setCurrentUser})(HeaderCont)
export default HeaderContainer