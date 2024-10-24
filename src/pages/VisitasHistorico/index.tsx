import FiltrosVisita from '../../components/Filtros/FiltrosVisita'
import MenuLateral from '../../components/Menu/MenuLateral'
import ListaVisitas from '../../components/Visitas/ListaVisitas'

function VisitasHistorico() {
  return (
    <>
      <MenuLateral />
      <FiltrosVisita />
      <ListaVisitas />
      <ListaVisitas />
      <ListaVisitas />
    </>
  )
}

export default VisitasHistorico
