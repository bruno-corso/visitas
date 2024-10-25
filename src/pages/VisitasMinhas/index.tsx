import FiltrosHistorico from '../../components/Filtros/FiltrosHistorico'
import MenuLateral from '../../components/Menu/MenuLateral'
import ListaVisitas from '../../components/Visitas/ListaVisitas'

function VisitasMinhas() {
  return (
    <>
      <MenuLateral />
      <FiltrosHistorico />
      <h2 className="ml-64 pl-4 pt-8 text-3xl text-green-dark font-bold">
        Minhas Visitas
      </h2>
      <ListaVisitas />
    </>
  )
}

export default VisitasMinhas
