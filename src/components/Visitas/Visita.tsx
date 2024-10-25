import React from 'react'
import { FaRegTrashAlt, FaInfoCircle } from 'react-icons/fa'
import ModalVisitante from '../Modal/ModalVisitante'
import ModalDeletar from '../Modal/ModalDeletar'

function Visita() {
  const [showModalInfo, setShowModalInfo] = React.useState(false)
  const [showModalDelete, setShowModalDelete] = React.useState(false)

  return (
    <>
      {showModalInfo && (
        <ModalVisitante fn={() => setShowModalInfo(!showModalInfo)} />
      )}
      {showModalDelete && (
        <ModalDeletar fn={() => setShowModalDelete(!showModalDelete)} />
      )}
      <div className="flex ">
        <div className=" shadow-sm text-sm ml-4 pl-4 pb-4 w-11/12 bg-white rounded-s-md grid gap-4 grid-cols-3 grid-rows-3 items-center">
          <p>
            Visitante:{' '}
            <span className="text-base font-semibold">Visitante</span>
          </p>
          <p>
            Empresa: <span className="text-base font-semibold">CSS</span>
          </p>
          <p>
            Responsável: <span className="text-base font-semibold">Host</span>
          </p>
          <p>
            Dia: <span className="text-base font-semibold">dd/mm/yy</span>
          </p>
          <p>
            Entrada: <span className="text-base font-semibold">10:00</span>
          </p>
          <p>
            Saída: <span className="text-base font-semibold">15:00</span>
          </p>
          <p className="col-span-3">
            Motivo Visita{': '}
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              sapiente numquam enim ipsam cumque? Distinctio, expedita inventore
              quae sequi aliquid sed possimus ipsum enim quod suscipit dolore
              vero esse odio.
            </span>
          </p>
        </div>
        <div className="shadow-sm w-1/12 mr-4 rounded-e-md bg-green flex flex-col justify-around items-center">
          <span
            onClick={() => setShowModalInfo(true)}
            className="cursor-pointer hover:opacity-70"
          >
            <FaInfoCircle color="white" />
          </span>
          <span
            onClick={() => setShowModalDelete(true)}
            className="cursor-pointer hover:opacity-70"
          >
            <FaRegTrashAlt color="white" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Visita
