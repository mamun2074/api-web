import { createSlice } from '@reduxjs/toolkit'

import { loginUser, logout } from "./authService";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        isLogingSuccess: false,
        isLogoutSuccess: false,
        error: null,
    },
    reducers: {
        resetLoginLogoutState: (state) => {
            state.isLogingSuccess = false
            state.isLogoutSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
                state.isLogingSuccess = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLogingSuccess = true
                state.loading = false
                state.user = action.payload.payload.data
                state.token = action.payload.payload.access_token
                localStorage.setItem('token', action.payload.payload.access_token)
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action);
                
                state.loading = false
                state.error = action.payload
                state.isLogingSuccess = false
            })

            .addCase(logout.pending, (state) => {
                state.loading = true
                state.error = null
                state.isLogoutSuccess = false
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false
                state.user = null
                state.token = null
                localStorage.removeItem('token')
                state.isLogoutSuccess = true
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.isLogoutSuccess = false
            })
    },
})

export const {
    resetLoginLogoutState
} = authSlice.actions

export default authSlice.reducer