import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoginSlice = {
    email_login: string,
    senha_login: string,
}

const initialState: LoginSlice = {
    email_login: "",
    senha_login: "",
}

const contadorSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        enviarDadosLogin(state) {
            console.log("Email: " + state.email_login);
            console.log("Senha: " + state.senha_login);
        },
        setEmailLogin(state, action: PayloadAction<string>) {
            state.email_login = action.payload;
        },
        setSenhaLogin(state, action: PayloadAction<string>) {
            state.senha_login = action.payload;
        },
    },
})

export const { setEmailLogin, setSenhaLogin, enviarDadosLogin } =
    contadorSlice.actions
export default contadorSlice.reducer