
const Winners = ({ winnersList }) => {
  return (
    winnersList.length > 0 && (
      <div className='Winners'>
        <h2 className='tittleWIners'>Ganadores:</h2>
        {winnersList?.map((winner, index) => (
          <div key={index}>
            <h3>Ganó {winner.name} el día {winner.date.slice(0, 10)} con id: {winner.id} </h3>
          </div>
        ))}
      </div>
    )
  )
}

export default Winners
