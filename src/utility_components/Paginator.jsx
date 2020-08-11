import React, { useEffect, useState, useCallback } from 'react'
import style from './Paginator.module.css'

const Paginator = ({ itemsCount, currentPage, pageSize, setNewItems }) => {
    
    useEffect(() => {
        changePage(currentPage)
    }, [currentPage])

    const stepAside = 4 //кол-во страниц по бокам относительно выделенной
    let pagesCount = Math.ceil(itemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const changePage = (page) => {
        if (page >= 1 && page <= 5) {
            return pages.slice(0, 9)
        }
        else if(page >= 6 && page<= pagesCount - stepAside){
            const startCounter = page - stepAside - 1
            const endCounter = page + stepAside
            return pages.slice(startCounter, endCounter)
        }
        else if(page > pagesCount - stepAside && page <= pagesCount){
            return pages.slice(pagesCount - (stepAside*2))
        }
        else if(page < pagesCount || page <= 0){
            return alert('Такой страницы не существует, введите корректный номер страницы')
        }
        else {
            return alert('Что-то пошло не так. Данные отображаются некорректно. Свяжитесь с администратором')//Место для try/catch
        }
    }
    const onChangePage = (page) => {
        setNewItems(page, pageSize)
    }
    return (
        <div >
            {changePage(currentPage, pageSize).map(page => {
                if (page === currentPage) {
                    return <span key={page} className={style.currentPage}>{page}</span>
                }
                else {
                    return <span key={page} className={style.pages} onClick={() => {onChangePage(page)}} >{page}</span>
                }
            })}
        </div>
    )
}


export default Paginator