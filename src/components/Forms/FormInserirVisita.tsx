import { Link } from 'react-router-dom'

function FormInserirVisita() {
  return (
    <div className="ml-72 pl-4 my-8 container bg-green-dark text-white rounded-md py-4 lg:w-9/12">
      <form>
        <div className="space-y-12">
          <div className="border-b border-white pb-12">
            {/* Nome Completo */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="nome-visita"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Nome Completo do Visitante
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="nome-visita"
                      name="nome-visita"
                      type="text"
                      placeholder="Digite aqui..."
                      autoComplete="nome-visita"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 me-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Empresa */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="empresa-visita"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Empresa do Visitante
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="empresa-visita"
                      name="empresa-visita"
                      type="text"
                      placeholder="Digite aqui..."
                      autoComplete="empresa-visita"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 me-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Data Visita */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="data-visita"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Data da Visita
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="data-visita"
                      name="data-visita"
                      type="date"
                      placeholder="Digite aqui..."
                      autoComplete="data-visita"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 me-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Hora Prevista */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="hora-visita"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Horário Chegada Previsto
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="hora-visita"
                      name="hora-visita"
                      type="time"
                      placeholder="Digite aqui..."
                      autoComplete="hora-visita"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 me-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Motivo */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="motivo-visita"
                  className="block font-bold text-sm leading-6 text-white"
                >
                  Motivo da Visita
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <textarea
                      required
                      id="motivo-visita"
                      name="motivo-visita"
                      placeholder="Digite aqui..."
                      autoComplete="motivo-visita"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 me-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-4">
          <button
            type="submit"
            className="rounded-md bg-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
          >
            <Link to={'/visita'}>Inserir</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormInserirVisita
