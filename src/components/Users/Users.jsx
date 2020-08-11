import React from 'react'
import style from './Users.module.css'
import User from './User'
import Paginator from '../../utility_components/Paginator'


const Users = ({ usersPage, follow, unfollow, setUsersData }) => {

    

    return <div className={style.global}>
        
        <Paginator setNewItems={setUsersData} itemsCount={usersPage.usersCount} currentPage={usersPage.currentPage} pageSize={usersPage.pageSize}/>
        {/* <div >{usersPage.pages.map((p) => {
            if (p === usersPage.currentPage) {
                return <span key={p} className={style.currentPage}>{p}</span>
            }
            else {
                return <span className={style.pages}
                    onClick={() => { setUsersData(p) }}>{p}</span>
            }
        })}
        </div> */}
        <div>
        {usersPage.users.map(user => {
                return <User key={user.id} followUnfollowProgress={usersPage.followUnfollowProgress} user={user}
                    follow={follow} unfollow={unfollow} />
            })}
        </div>
    </div>
}
// const textInButton=(follow)=>follow? 'Подписка':'Отписка'
export default Users


//Подаём 2 строки типа Мику Хацунэ, на выводе строка типа Мику Х.
// const fullNameShort = (name, lastName)=> {
//     let shortLastName = lastName.split('', 1)
//     shortLastName.join('')
//     return name + ' ' + shortLastName + '.'
// }