import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
    let ss = React.createRef()
    //Подаём 2 строки типа Мику Хацунэ, на выводе строка типа Мику Х.
    // const fullNameShort = (name, lastName)=> {
    //     let shortLastName = lastName.split('', 1)
    //     shortLastName.join('')
    //     return name + ' ' + shortLastName + '.'
    // }

    return <div className={style.global}>
        <div >{props.usersPage.pages.map((p) => 
        {
            if (p ===props.usersPage.currentPage){
                return <span key={p} className={style.currentPage}>{p}</span>
            }
            else {
            return <span className={style.pages}
            onClick={() => { props.setCurrentPage(p) }}>{p}</span>}

        })}
        </div>
        <div>
            {props.usersPage.users.map(user => {
                return (
                    <div key={user.id} className={style.wrapper}>
                        <div className={style.avatar}>
                            <div className={style.ava}>
                                <img src={user.photos.small} alt="Аву съел плохой интернет" />
                            </div>
                            <div className={style.butt}>
                                {user.follower ? <button onClick={() => { props.unfollow(user.id) }}>Отписаться</button> : <button onClick={() => { props.follow(user.id) }}>Подписаться</button>}
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
            })}
        </div>
    </div>
}
// const textInButton=(follow)=>follow? 'Подписка':'Отписка'
export default Users