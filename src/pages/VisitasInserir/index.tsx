import FormInserirVisita from '../../components/Forms/FormInserirVisita'
import MenuLateral from '../../components/Menu/MenuLateral'

function VisitasInserir() {
  return (
    <>
      <MenuLateral />
      <h2 className="ml-64 pl-8 pt-4 text-4xl text-green-dark font-bold">
        Inserir Nova Visita
      </h2>
      <FormInserirVisita />
    </>
  )
}

export default VisitasInserir
