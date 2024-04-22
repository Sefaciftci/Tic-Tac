import React,{useState} from 'react'
import './board.css'

function Square() {

  const [value , setValue] = useState(null);
  const handleClick = () => {
    setValue('X');
  } 

  return(
    <>
      <button 
      className='square'
      onClick={handleClick}
      >
        {value}
      </button>
    </>
  )
}




const Board = () => {
  return (
    <div>
      
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>

      
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>

      
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
        
    </div>
  )
}

export default Board
