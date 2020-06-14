import React from 'react'
import Users from './Users'
import Preloader from '../../utility_components/Preloader'
import {usersDAL} from '../../api/api'
import {follow, unfollow, setUsers, changePage, setUsersCount, fetchStatus, followUnfollowProgress} from './../../redux/users-reduser'
import { connect } from 'react-redux'
//split & join

class UsersAPI extends React.Component {
    componentDidMount(){
        this.props.fetchStatus(true)
            this.props.usersDAL.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setUsersCount(data.totalCount)
                this.props.fetchStatus(false)
            })
    }
    setCurrentPage = (page)=>{
        this.props.changePage(page)
        this.props.fetchStatus(true)
        this.props.usersDAL.getUsers(page, this.props.usersPage.pageSize)
        .then(data => {
            this.props.setUsers(data.items)
            this.props.fetchStatus(false)
        })
    }
    follow = (id)=>{
        // debugger
        this.props.followUnfollowProgress(true, id)
        this.props.usersDAL.follow(id).then(data => {
                // debugger
                if (data.resultCode === 0) {
                    this.props.follow(id)
                    alert('Подписан на ' + id)}
                else {alert('Ошибка' + data.messages)}
                this.props.followUnfollowProgress(false, id)
            })
    }
    unfollow = (id)=>{
        // debugger
        this.props.followUnfollowProgress(true, id)
        this.props.usersDAL.unfollow(id).then(data => {
            if (data.resultCode === 0)
            {this.props.unfollow(id)}
            else {alert('Ошибка' + data.messages)}
            this.props.followUnfollowProgress(false, id)
        })
    }
    render(){
        // debugger
        
        return<> 
        {this.props.usersPage.isFetch ? <Preloader />:
        <Users 
        usersPage={this.props.usersPage} 
        follow={this.follow}
        unfollow={this.unfollow}
        setCurrentPage={this.setCurrentPage}/>}
        </>
}
}

const mapStateToProps = (state) => {
    return{
        usersPage: state.usersPage,
        usersDAL
    }

}

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,changePage,setUsersCount,fetchStatus,followUnfollowProgress})(UsersAPI)
export default UsersContainer