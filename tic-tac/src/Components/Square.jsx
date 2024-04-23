import React,{useState} from "react";

export default function Square({currentState , changeTurn, row, col}) {

    const [value , setValue] = useState(null);
    const handleClick = () => {
            setValue(currentState);
            changeTurn(row,col);
    } 
  
    return(
        <>
        <div 
            className='square'
            onClick={handleClick}> 
          {value}
        </div>
      </>
    )
  }
