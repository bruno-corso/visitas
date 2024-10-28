import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counterSlice'

const store = configureStore({
    reducer: {
        contador: counterSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store