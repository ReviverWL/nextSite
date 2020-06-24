export const requiredField = (value) =>{
    if(value) return undefined
    return 'Это обязательное поле'
}
export const requiredMessage = (value) =>{
    if(value) return undefined
    return 'Поле сообщения не может быть пустым'
}
export const requiredStatus = (value) =>{
    if(value) return undefined
    return 'Статус не может быть пустым'
}
export const maxLength = (max)=>(value)=>{
        if(value.length > max) return `Максимальная длина сообщения ${max} символов`
        return undefined
    }