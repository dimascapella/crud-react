import axios from 'axios';

export const login = user => {
    return axios.post('http://localhost:8000/todos/login', {
        email: user.email,
        password: user.password
    })
        .then(res => {
            localStorage.setItem('userToken', res.data)
            return res.data
        })
}

export default login