
import Square from './Square'
import { useEffect } from 'react'

export default function Board ({ xIsNext, squares, onPlay, Winner }) {
  const winInfo = calculateWinner(squares)
  const winLine = winInfo.line

  function handleClick (i) {
    if (calculateWinner(squares).winner || squares[i]) {
      console.log(squares)
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    const row = 1 + Math.floor(i / 3)
    const col = 1 + (i % 3)

    const coordinates = {}
    coordinates.row = row
    coordinates.col = col

    const obj = {}
    obj.squares = nextSquares
    obj.coordinates = coordinates

    onPlay(obj)
  }

  const winner = calculateWinner(squares).winner
  let status

  if (winner) {
    status = 'Ganador: ' + winner
  } else {
    if (winInfo.isDraw) {
      status = 'Empate'
    } else {
      status = 'Siguiente Jugador: ' + (xIsNext ? 'X' : 'O')
    }
  }

  useEffect(() => {
    if (winner !== null) {
      Winner(winner)
    }
  }, [winner])

  const board = []
  for (let index = 0; index < 3; index++) {
    const cols = []
    for (let j = 0; j < 3; j++) {
      const pos = index * 3 + j
      cols.push(<Square value={squares[pos]} onSquareClick={() => handleClick(pos)} key={pos} highlight={winLine && winLine.includes(pos)} />)
    }
    board.push(
      <div key={index} className='board-row'>
        {cols}
      </div>
    )
  }

  return (
    <>
      <div className='status'>{status}</div>
      {board}

    </>
  )
}
/*  */

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] }
    }
  }

  let isDraw = true
  for (let j = 0; j < squares.length; j++) {
    if (squares[j] === null) {
      isDraw = false
      break
    }
  }

  return { winner: null, line: null, isDraw }
}
