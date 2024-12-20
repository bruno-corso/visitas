import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import VisitasHistorico from './pages/VisitasHistorico'
import VisitasSemana from './pages/VisitasSemana'
import VisitasMinhas from './pages/VisitasMinhas'
import VisitasInserir from './pages/VisitasInserir'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/visita" element={<VisitasSemana />} />
      <Route path="/historico" element={<VisitasHistorico />} />
      <Route path="/minhas" element={<VisitasMinhas />} />
      <Route path="/inserir" element={<VisitasInserir />} />
    </Routes>
  )
}

export default Rotas
