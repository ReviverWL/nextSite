import * as axios from 'axios'

const instance =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{'API-KEY': '3bc58a84-40c8-4e3a-b535-daa4561c95d1'}
})

export const usersDAL = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => { return response.data })
        )
    },
    follow(id) {
        return (
            instance.post(`follow/${id}`, {}).then(response => { return response.data })
        )
    },
    unfollow(id) {
        return (
            instance.delete(`follow/${id}`).then(response => { return response.data })
        )
    }
}

export const authDAL = {
    confirmedUserData(){
        return instance.get('auth/me').then(response => {return response.data})
    },
    authentication(email, password, rememberMe=false, captcha){
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(response=>{return response.data})
    },
    logout(){
        return instance.delete('auth/login').then(response=>{return response.data})
    },
    getCaptcha(){
        return instance.get('security/get-captcha-url').then(response=>{return response.data})
    }
}

export const profileDAL = {
    getUsersData(userId){
        return instance.get(`profile/${userId}`).then(response=>{return response.data} )
    },
    async putUserPhoto(photoFile){
        let formData = new FormData()
        formData.append('image', photoFile)
        let responce =await instance.put(`profile/photo`, formData, {headers:{'Content-Type': 'multipart/form-data'}})
        return  responce.data
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response=>{return response.data})
    },
    putUserStatus(status){
        return instance.put(`profile/status`, {status}).then(response=>{return response.data})
    }
}