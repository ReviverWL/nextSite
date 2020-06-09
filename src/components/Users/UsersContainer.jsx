import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import Preloader from './../../utility_components/Preloader'
import {follow, unfollow, setUsers, changePage, setUsersCount, fetchStatus} from './../../redux/users-reduser'
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.fetchStatus(false)
        })
    }
    render(){
        // debugger
        
        return<> 
        {this.props.usersPage.isFetch ? <Preloader />:null}
        <Users 
        usersPage={this.props.usersPage} 
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setCurrentPage={this.setCurrentPage}
        />
        </>
}
}

const mapStateToProps = (state) => {
    return{
        // let stateCopy = {...state}
        usersPage: state.usersPage
    }

}

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,changePage,setUsersCount,fetchStatus})(UsersAPI)
export default UsersContainer