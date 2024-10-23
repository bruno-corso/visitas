import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Visitas from './pages/Visitas'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/visita" element={<Visitas />} />
      <Route path="/historico" element={<Visitas />} />
    </Routes>
  )
}

export default Rotas
