import axios from 'axios'
import '../login.css'
import { useState } from 'react'
export default function Login () {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit (e) {
    e.preventDefault()

    axios.post('http://localhost:3306/api/auth/login', { email: correo, password })
      .then((response) => {
        console.log(response.data)
        const { token } = response.data
        localStorage.setItem('token', token)
        window.location.href = '/game'
      })
      .catch((error) => console.error(error))
  }
  function hanleChangeCorreo (e) {
    setCorreo(e.target.value)
  }
  function hanleChangePassword (e) {
    setPassword(e.target.value)
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
      </form>
    </ul>

  )
}
