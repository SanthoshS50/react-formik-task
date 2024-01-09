import axios from 'axios'
const API_URL = "https://659935c9a20d3dc41cef6114.mockapi.io"

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default ApiService