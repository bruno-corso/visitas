import FiltrosHistorico from '../../components/Filtros/FiltrosHistorico'
import MenuLateral from '../../components/Menu/MenuLateral'
import ListaVisitas from '../../components/Visitas/ListaVisitas'

function VisitasHistorico() {
  return (
    <>
      <MenuLateral />
      <FiltrosHistorico />
      <ListaVisitas />
      <ListaVisitas />
      <ListaVisitas />
    </>
  )
}

export default VisitasHistorico
