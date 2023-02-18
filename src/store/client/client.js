import { createSlice } from '@reduxjs/toolkit'
import { addclient, editclient, getclient, getclients, rauto } from '../api'

const client = createSlice({
    name: 'client',
    initialState: {
        isLoading: false,
        clients: [],
        client: '',
        isError: false,
        code: '',
    },
    reducers: {
        onStart: state => {
            state.code = ''
            state.isLoading = true
            state.isError = false
        },
        getClients: (state, { payload }) => {
            console.log(payload,"pay")
            state.code = ''
            state.isLoading = false
            state.isError = false
            state.clients = payload.data
        },
        getClient: (state, { payload }) => {
            state.code = ''
            state.isLoading = false
            state.isError = false
            state.client = payload
        },
        addEditDeleteClient: (state, { payload }) => {
            state.isLoading = false
            state.isError = false
            state.code = payload
        },
        onFail: state => {
            state.code = ''
            state.isLoading = false
            state.isError = true
        },
    },
})

export const getClients = () =>
    rauto({
        url: getclients,
        method: 'get',
        onStart: client.actions.onStart.type,
        onSuccess: client.actions.getClients.type,
        onFail: client.actions.onFail.type,
    })

export const getClient = id =>
    rauto({
        url: getclient + id,
        method: 'get',
        onStart: client.actions.onStart.type,
        onSuccess: client.actions.getClient.type,
        onFail: client.actions.onFail.type,
    })

export const addClient = data =>
    rauto({
        url: addclient,
        method: 'post',
        data,
        onStart: client.actions.onStart.type,
        onSuccess: client.actions.addEditDeleteClient.type,
        onFail: client.actions.onFail.type,
    })

export const editClient = (data, id) =>
    rauto({
        url: editclient + id,
        method: 'put',
        data,
        onStart: client.actions.onStart.type,
        onSuccess: client.actions.addEditDeleteClient.type,
        onFail: client.actions.onFail.type,
    })

export default client.reducer
