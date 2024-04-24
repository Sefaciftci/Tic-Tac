import React,{useState} from 'react'
import './board.css'
import Square from './Square'


const board = [[], [], []]

const Board = () => {

    const [turn , setTurn] = useState('X');
    const changeTurn = (row,col) => {
      setTurn(turn => turn === 'X' ? 'O':'X');

      board[row][col] = turn;

      console.log(checkForWin());
    }

    const checkForWin = () => {

      //satır kontrol
        for(let i= 0 ; i<board.length;i++){
          const row = board[i];
          if(row[0] === row[1] && row[1]===row[2]&& row[0]){
            return row[0]
          }
        }
      //sutun kontrol
        for(let i=0;i<board.length;i++){
          const st0 = board[0][i]
          const st1 = board[1][i]
          const st2 = board[2][i]
          
          if(st0===st1 && st1===st2 && st0)
              return st0;
        }

        //sagdan diagonal kontrol
        const sagd0 = board[0][0];
        const sagd1 = board[1][1];
        const sagd2 = board[2][2];
        if(sagd0===sagd1&&sagd1===sagd2&&sagd0){
          return sagd0;
        }
        
        //sagdan diagonal kontrol
        const sold0 = board[0][2];
        const sold1 = board[1][1];
        const sold2 = board[0][2];
        if(sold0===sold1&&sold1===sold2&&sold0){
          return sold0;
        }

        return false
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
