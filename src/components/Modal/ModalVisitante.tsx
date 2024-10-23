import React from 'react'
import ModalInserirDados from './ModalInserirDados'

interface Props {
  fn: () => void
}

function ModalVisitante({ fn }: Props) {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      {showModal ? (
        <ModalInserirDados fn={() => setShowModal(!showModal)} />
      ) : (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-md sm:min-w-96 md:min-w-[700px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-2xl font-semibold">Detalhes da Visita</h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={fn}
                  >
                    {/* <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span> */}
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ul className="flex flex-col">
                    <li>
                      <img
                        className="rounded-full"
                        src="https://placehold.co/80x80"
                        alt=""
                      />
                    </li>
                    <li>
                      <span>Nome Visitante</span>
                    </li>
                    <li>
                      <span>Nome Empresa</span>
                    </li>
                    <li>
                      <span>E-mail Visitante</span>
                    </li>
                    <li>
                      <span>Motivo da Visita</span>
                    </li>
                    <li>
                      <span>Responsável Local</span>
                    </li>
                    <li>
                      <span>Departamento Resposnsável</span>
                    </li>
                    <li>
                      <span>Data Prevista</span>
                    </li>
                    <li>
                      <span>Modelo Carro Visitante</span>
                    </li>
                    <li>
                      <span>Placa Carro Visitante</span>
                    </li>
                    <li>
                      <span>Horário Entrada</span>
                    </li>
                    <li>
                      <span>Horário Saída</span>
                    </li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={fn}
                  >
                    Fechar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Inserir informação
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  )
}

export default ModalVisitante
