import FiltrosVisita from '../../components/Filtros/FiltrosVisita'
import MenuLateral from '../../components/Menu/MenuLateral'
import ListaVisitas from '../../components/Visitas/ListaVisitas'

function Visitas() {
  return (
    <>
      <MenuLateral />
      <FiltrosVisita />
      <ListaVisitas />
    </>
  )
}

export default Visitas
