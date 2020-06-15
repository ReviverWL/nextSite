import React from 'react'
import Users from './Users'
import Preloader from '../../utility_components/Preloader'
import {setUsersData, setFollow, setUnfollow} from './../../redux/users-reduser'
import {withLoginRedirect} from './../../hoc/withLoginRediect'
import { connect } from 'react-redux'
import { compose } from 'redux'
//split & join

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.setUsersData(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }
    setCurrentPage = (page)=>{
        this.props.setUsersData(page, this.props.usersPage.pageSize)
    }
    
    render(){
        return<> 
        {this.props.usersPage.isFetch ? <Preloader />:
        <Users 
        usersPage={this.props.usersPage} 
        follow={this.props.setFollow}
        unfollow={this.props.setUnfollow}
        setCurrentPage={this.setCurrentPage}/>}
        </>
}
}

const mapStateToProps = (state) => {return{usersPage: state.usersPage}}

export default compose(
    connect(mapStateToProps, {setUsersData, setFollow, setUnfollow}),
    withLoginRedirect
)(UsersContainer)