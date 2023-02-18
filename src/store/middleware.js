import axios from 'axios'

const middleware =
    ({ dispatch }) =>
        next =>
            action => {
                if (action.type !== 'rauto') {
                    next(action)
                    return
                }

                next(action)

                const { method, url, params, data, onStart, onSuccess, onFail } = action.payload

                const token = localStorage.getItem('token')

                const headers = token ? { Authorization: `Bearer ${token}` } : null

                dispatch({ type: onStart })

                axios({
                    baseURL: 'https://dev-rauto.uz/',
                    // baseURL: 'http://localhost:5000/',
                    method,
                    data,
                    url,
                    params,
                    headers,
                })
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            // console.log(res)
                            dispatch({
                                type: onSuccess,
                                payload: res.data,
                            })
                        } else {
                            dispatch({
                                type: onFail,
                                payload: res,
                            })
                        }
                    })
                    .catch(error => {
                        console.log(12, error)
                        dispatch({
                            type: onFail,
                            payload: error,
                        })
                    })
            }

export default middleware
