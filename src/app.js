import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import AuthContext from './context/AuthContext'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './firebase/firebase.config'
const { useState, Suspense, lazy } = require('react')

/* solo cargo el componente cuando lo necesite ya que esto es una promesa que le mandamos import y el devuelve un objecto
que es el componente y este se resuelve cuando se monta el componente */
/* se usa el suspense para mostrar algo mientras esa promesa de lazy se resuelve pude ser un spinner o en este caso un texto */

const Game = lazy(() => import('./components/Game'))
export default function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
  }
  const logout = async () => {
    await signOut(auth)
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loginWithGoogle, logout }}>
      <BrowserRouter>
        <Suspense fallback='Loanding...'>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/game' element={<Game />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
