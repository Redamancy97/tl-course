import request from '../utils/http'

export function loginApi(userName, password) {
    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    formData.append("rememberMe", false);
    return request.post('/api/pcUser/login', formData)
}


export function getUserInfo() {
    return request.get('/api/pcUser/login-user/info')
}

export function logout() {
    return request.get('/api/pcUser/logout')
}