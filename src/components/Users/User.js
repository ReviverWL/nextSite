import React from 'react'
import style from './Users.module.css'
import out_of_photo from '../../assets/out_of_photo.jpg'
import { NavLink } from 'react-router-dom'

const User = ({ user, followUnfollowProgress, follow, unfollow }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <div className={style.ava}>
                    <NavLink to={'profile/' + user.id}>
                        <img src={user.photos.small === null ? out_of_photo : user.photos.small} alt="Ава" />
                    </NavLink>
                </div>
                <div className={style.butt}>
                    {user.followed 
                        ? <button disabled={followUnfollowProgress.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>Отписаться</button>
                        : <button disabled={followUnfollowProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>Подписаться</button>
                    }
                </div>
            </div>
            <div className={style.user}>
                <div className={style.userName}>{'fullNameShort(user.name, user.lastName)'}{user.name}</div>
                <div className={style.status}>{user.status}</div>
                <div className={style.location}>
                    <p>{"user.dislocation.country"}</p>
                    <p>{"user.dislocation.city"}</p>
                </div>
            </div>
        </div>
    )
}

export default User
