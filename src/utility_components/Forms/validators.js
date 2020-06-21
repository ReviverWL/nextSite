export const requiredField = (value) =>{
    if(value) return undefined
    return 'Это обязательное поле'
}
export const maxLength = (max)=>(value)=>{
        if(value.length > max) return `Максимальная длина сообщения ${max} символов`
        return undefined
    }