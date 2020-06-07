import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import {followAC, unfollowAC, setUsersAC, changePageAC} from './../../redux/users-reduser'
import { connect } from 'react-redux'
//split & join

{/* <div >{pages.map((p)=>{
    return<span className={style.pageNumber}>{p}</span>
})}Специально обученный див для отображения результата <button onClick={changePage}>Кнопка для получения результата</button>
</div> */}

class UsersAPI extends React.Component {
    componentDidMount(){
 // const setUsers = ()=>{
        // if(props.usersPage.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
            // }
        // }
    }
    render(){
        return <Users 
        usersPage={this.props.usersPage} 
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        changePage={this.props.changePage}
        />
}
}

const mapStateToProps = (state) => {
    return{
        // let stateCopy = {...state}
        usersPage: state.usersPage
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        follow: (id)=>{dispatch(followAC(id))},
        unfollow: (id)=>{dispatch(unfollowAC(id))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
        changePage: (currentPage)=>{dispatch(changePageAC(currentPage))}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
export default UsersContainer