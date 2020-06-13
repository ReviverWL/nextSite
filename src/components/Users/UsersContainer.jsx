import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import Preloader from './../../utility_components/Preloader'
import {follow, unfollow, setUsers, changePage, setUsersCount, fetchStatus, followUnfollowProgress} from './../../redux/users-reduser'
import { connect } from 'react-redux'
//split & join

{/* <div >{pages.map((p)=>{
    return<span className={style.pageNumber}>{p}</span>
})}Специально обученный див для отображения результата <button onClick={changePage}>Кнопка для получения результата</button>
</div> */}

class UsersAPI extends React.Component {
    componentDidMount(){
        this.props.fetchStatus(true)
 // const setUsers = ()=>{
        // if(props.usersPage.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
                this.props.fetchStatus(false)
            })
            // }
        // }
        
    }
    setCurrentPage = (page)=>{
        this.props.changePage(page)
        this.props.fetchStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`, {withCredentials: true})
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.fetchStatus(false)
        })
    }
    follow = (id)=>{
        // debugger
        this.props.followUnfollowProgress(true, id)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{}, {withCredentials: true, headers:{"API-KEY": "3bc58a84-40c8-4e3a-b535-daa4561c95d1"}})
            .then(response => {
                // debugger
                if (response.data.resultCode === 0) {
                    this.props.follow(id)
                    alert('Подписан на ' + id)}
                else {alert('Ошибка' + response.data.messages)}
                this.props.followUnfollowProgress(false, id)
            })
    }
    unfollow = (id)=>{
        // debugger
        this.props.followUnfollowProgress(true, id)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {withCredentials: true,headers:{"API-KEY": "3bc58a84-40c8-4e3a-b535-daa4561c95d1"}})
        .then(response => {
            if (response.data.resultCode === 0)
            {this.props.unfollow(id)}
            else {alert('Ошибка' + response.data.messages)}
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
        usersPage: state.usersPage
    }

}

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,changePage,setUsersCount,fetchStatus,followUnfollowProgress})(UsersAPI)
export default UsersContainer