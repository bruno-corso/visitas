import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import VisitasHistorico from './pages/VisitasHistorico'
import VisitasSemana from './pages/VisitasSemana'
import VisitasMinhas from './pages/VisitasMinhas'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/visita" element={<VisitasSemana />} />
      <Route path="/historico" element={<VisitasHistorico />} />
      <Route path="/minhas" element={<VisitasMinhas />} />
    </Routes>
  )
}

export default Rotas
