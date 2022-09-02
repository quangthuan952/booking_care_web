import axios from "../axios";

const handleLogin = (email, password) => {
    return axios.post('/api/login', {email, password})
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`)

}

const createUser = (data) => {
    return axios.post(`/api/create-new-user`, data)

}

const deleteUser = (id) => {
    return axios.post(`/api/delete-user?id=${id}`)
}
export {handleLogin, getAllUsers, createUser, deleteUser}