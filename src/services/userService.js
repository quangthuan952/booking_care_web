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

const editUser = (data) => {
    return axios.put(`/api/edit-user`, data)
}

const deleteUser = (id) => {
    return axios.post(`/api/delete-user?id=${id}`)
}

const getAllCodeService = (type) => {
    return axios.get(`/api/allCode?type=${type}`)
}
export {handleLogin, getAllUsers, createUser, deleteUser, editUser, getAllCodeService}