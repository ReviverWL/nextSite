import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'
let friendButton = React.createRef()


const Users = (props) => {

    // const setUsers = ()=>{
        if(props.usersPage.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response=>{
                props.setUsers(response.data.items)
            })
        }
    // }
//Подаём 2 строки типа Мику Хацунэ, на выводе строка типа Мику Х.
    const fullNameShort = (name, lastName)=> {
        let shortLastName = lastName.split('', 1)
        shortLastName.join('')
        return name + ' ' + shortLastName + '.'
    }
    
    let users = props.usersPage.users.map(user=>{
        return (
            <div key={user.id} className={style.wrapper}>
                <div className={style.avatar}>
                    <div className={style.ava}>
                    <img src={user.photos.small} alt="Аву съел плохой интернет"/>
                    </div>
                    <div className={style.butt}>
                        {user.follower ? <button onClick={()=>{props.unfollow(user.id)} }>Отписаться</button>:<button onClick={()=>{props.follow(user.id)}}>Подписаться</button>}
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
    })

    return(
        <div className={style.global}>
            {/* <div>Ава + <button>Батончик</button></div>
            <div>Описалка</div> */}
            {users}
        </div>
    )
}
// const textInButton=(follow)=>follow? 'Подписка':'Отписка'
export default Users

    let changePage = () => {
        const stepAside = 4//кол-во страниц по бокам относительно выделенной
        pages.length = 0
        switch (true) {
            case (currentPage >= 1 && currentPage <= 5)://страницы с 1 по 9
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                }
                break;
            case (currentPage >= 6 && currentPage <= countUsers - stepAside)://логика страниц в центре(тех, что при активации изменяют номера страниц) не считая последние
                const startCounter = currentPage - stepAside
                const endCounter = currentPage + stepAside
            for (let i = startCounter; i <= endCounter; i++) {
                    pages.push(i)
                }
                break;
            case (currentPage > countUsers - stepAside)://фиксированное кол-во страниц
                for (let i = countUsers - stepAside * 2; i <= countUsers; i++) {
                    pages.push(i)
                }
                break;
            case (currentPage <= 0 || currentPage > countUsers):
                alert("Такой страницы не существует. Введите корректный номер страницы.")
                break
            default:
                alert(/*"Введите номер страницы. Данное поле распознаёт только цифры."*/"Что-то пошло не так. Данные отображаются некорректно. Свяжитесь с администратором")//Место для try/catch
                break;
        }
    }