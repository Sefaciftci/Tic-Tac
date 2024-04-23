import React,{useState} from 'react'
import './board.css'
import Square from './Square'


const board = [[], [], []]

const Board = () => {

    const [turn , setTurn] = useState('X');
    const changeTurn = (row,col) => {
      setTurn(turn => turn === 'X' ? 'O':'X');

      board[row][col] = turn;
      console.log(board);
    }


  return (
    <div className='board'>    
      <div className='board-row'>
        <Square  row={0} col={0} currentState = {turn} changeTurn = {changeTurn}/>
        <Square  row={0} col={1}  currentState = {turn} changeTurn = {changeTurn}/>
        <Square  row={0} col={2} currentState = {turn} changeTurn = {changeTurn}/>
      </div>

      
      <div className='board-row'>
        <Square  row={1} col={0} currentState = {turn} changeTurn = {changeTurn}/>
        <Square  row={1} col={1} currentState = {turn} changeTurn = {changeTurn}/>
        <Square  row={1} col={2} currentState = {turn} changeTurn = {changeTurn}/>
      </div> 
 
       
      <div clas sName='board-row'>
        <Square  row={2} col={0}  currentState = {turn} changeTurn = {changeTurn}/>
        <Square  row={2} col={1} currentState = {turn} changeTurn = {changeTurn}/>
        <Square  row={2} col={2} currentState = {turn} changeTurn = {changeTurn}/>
      </div>
        
    </div>
  )
}

export default Board
