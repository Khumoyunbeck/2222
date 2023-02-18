import { createSlice } from '@reduxjs/toolkit'

const lang = createSlice({
    name: 'lang',
    initialState: {
        lang: localStorage.getItem('lang') ?? 0,
    },
    reducers: {
        changeLang: (state, { payload }) => {
            state.lang = payload
            localStorage.setItem('lang', payload)
        },
    },
})

export const {changeLang} = lang.actions

export default lang.reducer
