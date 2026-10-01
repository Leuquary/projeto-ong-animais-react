import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Cadastro from './pages/Cadastro'
import Inicio from './pages/Inicio'
import NaoEncontrada from './pages/NaoEncontrada'
import Projetos from './pages/Projetos'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/projeto-ong-animais-react/" element={<Inicio />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}
