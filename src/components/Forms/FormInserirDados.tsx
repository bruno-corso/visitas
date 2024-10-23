function FormInserirDados() {
  return (
    <div className="m-4 bg-white text-gray-900 rounded-md lg:w-9/12">
      <form>
        <div className="space-y-12">
          <div>
            <p className="mt-1 font-normal text-sm leading-6 ring-offset-white">
              Esseas informações serão salvas no banco de dados.
            </p>
            {/* Horário Entrada */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="InHour"
                  className="block font-bold text-sm leading-6 text-gray-900"
                >
                  Horário entrada
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="InHour"
                      name="InHour"
                      type="time"
                      placeholder="Seu Nome"
                      autoComplete="InHour"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Horário Saída */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="OutHour"
                  className="block font-bold text-sm leading-6 text-gray-900"
                >
                  Horário saída
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      required
                      id="OutHour"
                      name="OutHour"
                      type="time"
                      placeholder="Seu Nome"
                      autoComplete="OutHour"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Placa Carro */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="placa"
                  className="block font-bold text-sm leading-6 text-gray-900"
                >
                  Placa Carro
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      id="placa"
                      name="placa"
                      type="text"
                      placeholder="Digite aqui..."
                      autoComplete="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Modelo Carro */}
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="placa"
                  className="block font-bold text-sm leading-6 text-gray-900"
                >
                  Placa Carro
                </label>
                <div className="mt-2">
                  <div className="bg-green-light flex rounded-md shadow-sm ring-1 ring-inset font-normal ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-900 sm:max-w-md">
                    <input
                      id="placa"
                      name="placa"
                      type="text"
                      placeholder="Digite aqui..."
                      autoComplete="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-green-950 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormInserirDados
