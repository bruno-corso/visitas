import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { enviarDadosCadastro, setDeptoCadastro, setEmailCadastro, setNomeCadastro, setSenhaCadastro } from '../../features/cadastroSlice'

type Props = {
  cadastro: () => void
}

function FormCadastro({ cadastro }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const cadastroSelector = useSelector((state: RootState) => state.cadastroSlice)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="my-8 container bg-green text-white rounded-md p-8 lg:w-9/12">
      <form>
        <div className="space-y-12">
          <div className="border-b border-white pb-12">
            <h2 className="text-base font-semibold leading-7 ">
              Cadastre um Novo Usuário
            </h2>
            <p className="mt-1 font-thin text-sm leading-6 ring-offset-white">
              Esse usuário será usuádo para identificar suas ações no
              aplicativo.
            </p>
            {/* Nome Completo */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Nome Completo
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Seu Nome"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) => dispatch(setNomeCadastro(e.target.value))}
                      value={cadastroSelector.nome_cadastro}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Departamento */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="departamento"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Departamento
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <select
                      id="departamento"
                      className="block flex-1 border-0 bg-transparent py-2 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) => dispatch(setDeptoCadastro(e.target.value))}
                      value={cadastroSelector.departamento_cadastro}
                    >
                      <option selected>Comercial</option>
                      <option>Operações</option>
                      <option>Diretoria</option>
                      <option>Serviços Gerais</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      onChange={(e) => dispatch(setEmailCadastro(e.target.value))}
                      value={cadastroSelector.email_cadastro}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Senha 1 */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="senha"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Crie uma Senha
                </label>
                <div className="mt-2">
                  <div className="relative bg-green-light rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="hs-toggle-password"
                      type={passwordVisible ? 'text' : 'password'}
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Enter password"
                      onChange={(e) => dispatch(setSenhaCadastro(e.target.value))}
                      value={cadastroSelector.senha_cadastro}
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
            {/* Senha 2 */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="senha"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Repita a Senha
                </label>
                <div className="mt-2">
                  <div className="relative bg-green-light rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="hs-toggle-password"
                      type={passwordVisible ? 'text' : 'password'}
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Enter password"
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

        <div className="mt-6 flex items-center justify-start gap-x-4">
          <button
            type="submit"
            className="rounded-md bg-green-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
            onClick={() => { dispatch(enviarDadosCadastro()) }}
          >
            <Link to={'/visita'}>Save</Link>
          </button>
          <button
            type="button"
            onClick={cadastro}
            className="text-sm font-semibold leading-6 rounded-md text-gray-900 px-3 py-2 hover:opacity-60"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormCadastro
