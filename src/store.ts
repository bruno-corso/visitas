import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counterSlice'
import loginSlice from './features/loginSlice'

const store = configureStore({
    reducer: {
        contador: counterSlice,
        loginSlice: loginSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store