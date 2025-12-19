
import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../../../services/api'

// async action
export const loginUser = createAsyncThunk(
    'auth/login',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await api.post('login', payload)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Login failed')
        }
    }
)

// async action
export const logout = createAsyncThunk(
    'auth/logout',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await api.post('logout', payload)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Login failed')
        }
    }
)