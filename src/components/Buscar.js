import axios from 'axios'
import { useState } from 'react'
const Buscar = ({ setWinnersList, token }) => {
  const [searchId, setSearchId] = useState('')
  const handleSearch = () => {
    axios.get(`http://localhost:3306/api/winners/${searchId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setWinnersList(response.data))
      .catch((error) => console.error(error))
  }

  const hanleChange = (e) => {
    setSearchId(e.target.value)
  }
  return (
    <>
      <h1 className='searchWinner'>Buscar ganador</h1>
      <input type='text' placeholder='Buscar ganador por id' value={searchId} onChange={hanleChange} className='InputSearchWinner' />
      <button className='ButtonSearchWinner' onClick={handleSearch}>Buscar</button>
    </>
  )
}
export default Buscar
