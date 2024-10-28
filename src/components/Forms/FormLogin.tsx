import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import { enviarDadosLogin, setEmailLogin, setSenhaLogin } from '../../features/loginSlice'

type Props = {
  cadastro: () => void
}


function FormLogin({ cadastro }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const inputEmail = useSelector((state: RootState) => state.loginSlice)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="my-8 container bg-green text-white rounded-md p-8 lg:w-9/12">
      <form>
        <div className="space-y-12">
          <div className="border-b border-white pb-8">
            <h2 className="text-base font-semibold leading-7 ">Bem-Vindo!</h2>
            <p className="mt-1 font-thin text-sm leading-6 ring-offset-white">
              Entre com seus dados abaixo.
            </p>

            {/* Email */}
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@email.com"
                      autoComplete="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) => dispatch(setEmailLogin(e.target.value))}
                      value={inputEmail.email_login}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Senha 1 */}
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="senha"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Senha
                </label>
                <div className="mt-2">
                  <div className="relative bg-green-light rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="hs-toggle-password"
                      type={passwordVisible ? 'text' : 'password'}
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Enter password"
                      onChange={(e) => dispatch(setSenhaLogin(e.target.value))}
                      value={inputEmail.senha_login}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      data-hs-toggle-password={{
                        target: '#hs-toggle-password',
                      }}
                      className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 "
                    >
                      <svg
                        className="shrink-0 size-3.5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          className={passwordVisible ? 'hidden' : ''}
                          d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                        ></path>
                        <path
                          className={passwordVisible ? 'hidden' : ''}
                          d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                        ></path>
                        <path
                          className={passwordVisible ? 'hidden' : ''}
                          d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                        ></path>
                        <line
                          className={passwordVisible ? 'hidden' : ''}
                          x1="2"
                          x2="22"
                          y1="2"
                          y2="22"
                        ></line>
                        <path
                          className={passwordVisible ? '' : 'hidden'}
                          d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                        ></path>
                        <circle
                          className={passwordVisible ? '' : 'hidden'}
                          cx="12"
                          cy="12"
                          r="3"
                        ></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={() => dispatch(enviarDadosLogin())}
          className="mt-4 rounded-md bg-green-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
        >
          <Link to={'/visita'}>Entrar</Link>
        </button>
      </form>
      <p className="mt-4 text-sm font-thin">
        Não possui um usuário cadastrado
        <a
          onClick={cadastro}
          className="block cursor-pointer font-normal underline hover:opacity-70"
        >
          Cadastre-se
        </a>
      </p>
    </div>
  )
}

export default FormLogin
