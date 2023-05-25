import axios from 'axios'
import { useState } from 'react'
const Delete = ({ setWinnersList, token }) => {
  // el estado sera ""
  const [searchId, setSearchId] = useState('')
  const handleDelete = () => {
    axios.delete(`http://localhost:3306/api/winners/${searchId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setWinnersList(response.data))
      .catch((error) => console.error(error))
  }
  // aqui cambiare el valor del estado
  const hanleChange = (e) => {
    console.log(e.target.value)
    setSearchId(e.target.value)
  }
  return (
    <>
      <h1 className='tittleDelete'>Eliminar ganador</h1>
      <input className='IngresarId' type='text' placeholder='Ingresar id' value={searchId} onChange={hanleChange} />
      <button className='Delete' onClick={handleDelete}>Eliminar </button>
    </>
  )
}
export default Delete
