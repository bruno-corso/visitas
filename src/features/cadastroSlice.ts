import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CadastroSlice = {
  email_cadastro: string
  senha_cadastro: string
  nome_cadastro: string
  departamento_cadastro: string
}

const initialState: CadastroSlice = {
  email_cadastro: '',
  senha_cadastro: '',
  nome_cadastro: '',
  departamento_cadastro: '',
}

const contadorSlice = createSlice({
  name: 'cadastro',
  initialState,
  reducers: {
    enviarDadosCadastro(state) {
      console.log('Email: ' + state.email_cadastro)
      console.log('Senha: ' + state.senha_cadastro)
      console.log('Nome Completo: ' + state.nome_cadastro)
      console.log('Departamento: ' + state.departamento_cadastro)
    },
    setEmailCadastro(state, action: PayloadAction<string>) {
      state.email_cadastro = action.payload
    },
    setSenhaCadastro(state, action: PayloadAction<string>) {
      state.senha_cadastro = action.payload
    },
    setNomeCadastro(state, action: PayloadAction<string>) {
      state.nome_cadastro = action.payload
    },
    setDeptoCadastro(state, action: PayloadAction<string>) {
      state.departamento_cadastro = action.payload
    },
  },
})

export const {
  setEmailCadastro,
  setSenhaCadastro,
  enviarDadosCadastro,
  setDeptoCadastro,
  setNomeCadastro,
} = contadorSlice.actions
export default contadorSlice.reducer
