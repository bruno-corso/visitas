// import React from 'react'

import FormInserirDados from '../Forms/FormInserirDados'

interface Props {
  fn: () => void
}

function ModalInserirDados({ fn }: Props) {
  // const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-md sm:min-w-96 md:min-w-[700px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h5 className="text-2xl font-semibold  text-gray-900">
                Inserir dados
              </h5>
              <button
                className="p-1 ml-auto bg-transparent border-0 opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={fn}
              >
                {/* <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span> */}
              </button>
            </div>
            {/*body*/}
            <FormInserirDados />
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-gray-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={fn}
              >
                Desisitir
              </button>
              <button
                className="bg-green text-gray-900 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={fn}
              >
                Enviar dados
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ModalInserirDados
