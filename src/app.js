import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './components/Game'
import Login from './components/Login'
import AuthContext from './context/AuthContext'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './firebase/firebase.config'
const { useState } = require('react')
export default function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
  }
  const logout = async () => {
    const response = await signOut(auth)
    console.log(response)
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loginWithGoogle, logout }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
