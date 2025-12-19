import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import authReducer from '../../src/views/admin/auth/store/authSlice'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
    },
})