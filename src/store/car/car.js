import { createSlice } from '@reduxjs/toolkit'
import { addcar, editcar, getcar,  rauto } from '../api'
import {MainApi} from "../../api";

const car = createSlice({
    name: 'car',
    initialState: {
        isLoading: false,
        cars: [],
        car: '',
        isError: false,
        code: '',
    },
    reducers: {
        onStart: state => {
            state.code = ''
            state.isLoading = true
            state.isError = false
        },
        getCars: (state, { payload }) => {
            state.code = ''
            state.isLoading = false
            state.isError = false
            state.cars = payload
        },
        getCar: (state, { payload }) => {
            state.code = ''
            state.isLoading = false
            state.isError = false
            state.car = payload
        },
        addEditDeleteCar: (state, { payload }) => {
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

export const getCars = () =>
    rauto({
        url: `${MainApi}/car/all`,
        method: 'get',
        onStart: car.actions.onStart.type,
        onSuccess: car.actions.getCars.type,
        onFail: car.actions.onFail.type,
    })

export const getCar = id =>
    rauto({
        url: getcar + id,
        method: 'get',
        onStart: car.actions.onStart.type,
        onSuccess: car.actions.getCar.type,
        onFail: car.actions.onFail.type,
    })

export const addCar = data =>
    rauto({
        url: addcar,
        method: 'post',
        data,
        onStart: car.actions.onStart.type,
        onSuccess: car.actions.addEditDeleteCar.type,
        onFail: car.actions.onFail.type,
    })

export const editCar = (data, id) =>
    rauto({
        url: editcar + id,
        method: 'put',
        data,
        onStart: car.actions.onStart.type,
        onSuccess: car.actions.addEditDeleteCar.type,
        onFail: car.actions.onFail.type,
    })

export default car.reducer
