import { useState } from 'react'
import FormCadastro from '../../components/Forms/FormCadastro'
import FormLogin from '../../components/Forms/FormLogin'

function Login() {
  const [novoUsuario, setNovoUsuario] = useState(false)

  const toggleNovoUsuario = () => {
    setNovoUsuario(!novoUsuario)
  }
  return (
    <>
      {novoUsuario ? (
        <FormCadastro cadastro={() => toggleNovoUsuario()} />
      ) : (
        <FormLogin cadastro={() => toggleNovoUsuario()} />
      )}
    </>
  )
}

export default Login
