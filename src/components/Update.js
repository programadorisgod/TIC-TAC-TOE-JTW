import axios from 'axios'
import { useState } from 'react'
const Update = ({ setWinnersList, token }) => {
  const [searchId, setSearchId] = useState('')
  const [searchName, setSearchName] = useState('')

  const handleUpdate = () => {
    axios.patch(`http://localhost:3306/api/winners/${searchId}`, { name: searchName }, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setWinnersList(response.data))
      .catch((error) => console.error(error))
  }
  const hanleChangee = (e) => {
    setSearchName(e.target.value)
  }

  const hanleChange = (e) => {
    console.log(e.target.value)
    setSearchId(e.target.value)
  }
  return (
    <>
      <h1 className='tittleUpdate'>Actualizar ganador</h1>
      <input className='IngresarId' type='text' placeholder='Ingresar id' value={searchId} onChange={hanleChange} />
      <input className='IngresarNombre' type='text' placeholder='Ingresar nombre' value={searchName} onChange={hanleChangee} />
      <button className='update' onClick={handleUpdate}>Actualizar</button>
    </>
  )
}
export default Update
