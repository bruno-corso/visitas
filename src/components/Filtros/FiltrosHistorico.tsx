function FiltrosHistorico() {
  return (
    <div className="bg-green-950 ml-64 px-4 mt-0 flex justify-start gap-4 flex-col md:flex-row  md:py-4">
      {/* Data Inicio */}
      <div>
        <label
          htmlFor="data-inicio"
          className="block text-sm font-bold leading-6 text-white"
        >
          Data Inicio
        </label>
        <div className="inline-block w-2/12 min-w-32 mt-2 rounded-md shadow-sm">
          <input
            id="data-inicio"
            name="data-inicio"
            type="date"
            className=" block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset
             ring-gray-300 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {/* Data Fim */}
      <div>
        <label
          htmlFor="data-fim"
          className="block text-sm font-bold leading-6 text-white"
        >
          Data Fim
        </label>
        <div className="inline-block w-2/12 min-w-32 mt-2 rounded-md shadow-sm">
          <input
            id="data-fim"
            name="data-fim"
            type="date"
            className=" block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset
             ring-gray-300 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {/* Nome Visitante */}
      <div>
        <label
          htmlFor="visitante"
          className="block text-sm font-bold leading-6 text-white"
        >
          Nome Visitante
        </label>
        <div className="inline-block min-w-32 mt-2 rounded-md shadow-sm">
          <input
            id="visitante"
            name="visitante"
            type="text"
            placeholder="Digite aqui..."
            className=" block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 ring-1 ring-inset
             ring-white sm:text-sm sm:leading-6 "
          />
        </div>
      </div>
      {/* Nome Empresa */}
      <div>
        <label
          htmlFor="empresa"
          className="block text-sm font-bold leading-6 text-white"
        >
          Nome Empresa
        </label>
        <div className="inline-block min-w-32 mt-2 rounded-md shadow-sm">
          <input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Digite aqui..."
            className=" block w-full rounded-md border-2 borde py-1.5 px-2 text-gray-900 ring-1 ring-inset
             ring-white sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {/* Botão */}
      <div className="flex flex-col - justify-end">
        <button
          type="submit"
          className=" rounded-md bg-green w-[100px] leading-6 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
        >
          Filtrar
        </button>
      </div>
    </div>
  )
}

export default FiltrosHistorico
