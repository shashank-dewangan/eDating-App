import axios from 'axios'

const instance = axios.create({
    baseURL: "https://edating-database.herokuapp.com/"
})

export default instance