import React, { useEffect, useCallback } from 'react'
import Users from './Users'
import Preloader from '../../utility_components/Preloader'
import {setUsersData, setFollow, setUnfollow} from './../../redux/users-reduser'
import {withLoginRedirect} from './../../hoc/withLoginRediect'
import { connect } from 'react-redux'
import { compose } from 'redux'
//split & join

const UsersContainer = ({usersPage, setUsersData, setFollow, setUnfollow})=> {
    // const updatePage = useCallback(()=>{
    //     setUsersData(currentPage, pageSize)
    // }, [currentPage, pageSize])
    useEffect(()=>{
            if (usersPage.users.length === 0) {
                setUsersData(undefined , usersPage.pageSize)
            }
            else{alert('Yo')}
    }, [])

        return<> 
        {usersPage.isFetch ? <Preloader />:
        <Users 
        usersPage={usersPage} 
        follow={setFollow}
        unfollow={setUnfollow}
        setUsersData={setUsersData}
        />}
        </>
}

const mapStateToProps = (state) => {return({usersPage: state.usersPage})}

export default compose(
    connect(mapStateToProps, {setUsersData, setFollow, setUnfollow}),
    withLoginRedirect
)(UsersContainer)