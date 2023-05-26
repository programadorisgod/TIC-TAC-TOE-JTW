import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './components/Game'
import Login from './components/Login'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
