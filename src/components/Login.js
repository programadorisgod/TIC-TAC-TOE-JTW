import axios from 'axios'

export default function Login ({ setToken }) {
  function Login () {
    axios.post('http://localhost:3306/api/auth/login')
      .then((response) => setToken(response.data.token))
      .catch((error) => console.error(error))
  }

  return (
    <>
      <button className='Login' onClick={Login}>Login</button>
    </>
  )
}
