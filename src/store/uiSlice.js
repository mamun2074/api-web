import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarShow: true,
        theme: 'light',
    },
    reducers: {
        setSidebarShow: (state, action) => {
            state.sidebarShow = action.payload
        },
        setTheme: (state, action) => {
            state.theme = action.payload
        },
    },
})

export const { setSidebarShow, setTheme } = uiSlice.actions
export default uiSlice.reducer