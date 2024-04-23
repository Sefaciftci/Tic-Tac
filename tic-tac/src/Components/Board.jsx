import React,{useState} from 'react'
import './board.css'
import Square from './Square'

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
