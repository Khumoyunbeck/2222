import { createAction } from '@reduxjs/toolkit'
import {MainApi} from "../api";

export const rauto = createAction('rauto')

// client
export const getclients = `${MainApi}/client/all`
export const addclient = `${MainApi}/client/add`
export const getclient = 'client/' // :id
export const editclient = 'client/' // :id

// car
export const getcars = 'car/user/all'
export const getcar = 'Car/' // :id
export const addcar = `${MainApi}/car/add`
export const editcar = 'Car/' // :id
