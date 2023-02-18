import axios from 'axios'

export const MainApi = "https://dev-rauto.uz"

const instance = axios.create({
    baseURL: MainApi,
})

instance.interceptors.request.use(
    async config => {
        // config.headers.Authorization = `Bearer ${GetToken()}`;
        config.headers = {
            ...config.headers,
            'Content-Type': 'application/json',
        }
        return config
    },
    error => Promise.reject(error.response)
)

instance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response)
    }
)

export default instance
