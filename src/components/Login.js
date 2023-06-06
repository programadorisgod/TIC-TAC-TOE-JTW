import axios from 'axios'
import '../login.css'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

import { AiFillGoogleCircle } from 'react-icons/ai'
export default function Login () {
  const [correo, setCorreo] = useState('')

  const [password, setPassword] = useState('')

  const { setIsLoggedIn, loginWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  function handleSubmit (e) {
    e.preventDefault()

    axios.post('http://localhost:3306/api/auth/login', { email: correo, password })
      .then((response) => {
        const { token } = response.data
        setIsLoggedIn(true)

        localStorage.setItem('token', token)
        navigate('/game')
      })
      .catch((error) => console.error(error))
  }
  function hanleChangeCorreo (e) {
    setCorreo(e.target.value)
  }
  function hanleChangePassword (e) {
    setPassword(e.target.value)
  }
  async function handleGoogle (e) {
    e.preventDefault()
    const result = await loginWithGoogle()

    if (result._tokenResponse.idToken) {
      setIsLoggedIn(true)
      localStorage.setItem('token', result._tokenResponse.idToken)
      navigate('/game')
    }
  }
  return (

    <ul className='background'>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />

      <form className='form-login' onSubmit={handleSubmit}>
        <h1 className='tittle-login'>Login</h1>
        <input className='Username' type='text' placeholder='Correo' value={correo} onChange={hanleChangeCorreo} />
        <input className='password' type='password' placeholder='Password' value={password} onChange={hanleChangePassword} />
        <button className='submit' type='submit'>Login</button>
        <button className='google' onClick={handleGoogle}> <span className='icon-contain'> <span className='icon-title'>Google </span> <AiFillGoogleCircle size={25} /> </span> </button>

      </form>
    </ul>

  )
}
