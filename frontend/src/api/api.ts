import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const usersAPI = {
    getUsersList() {
        return instance.get(`/users`)
            .then(response => response)
            .catch(err => err)
    },
    getUserDetails(id: string) {
        return instance.get(`/users/${id}`)
            .then(response => response)
            .catch(err => err)
    }
}