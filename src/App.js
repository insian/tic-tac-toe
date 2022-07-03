import React, { useState, useEffect } from 'react';
import './App.css';
import SquareComponent from './squarecomponent';
const initialState=["","","","","","","","",""];

function App() {
  const [gameState,updateGameState]=useState(initialState);
  const [isXChance,updateIsXchance]=useState(false);
  
  const buttons = Array.from(document.querySelectorAll("button"));
  if(buttons.length===3){
    if(gameState === initialState){
      buttons[2].setAttribute("disabled","disabled");
      buttons[0].removeAttribute("disabled");
      buttons[1].removeAttribute("disabled");
    }
    else{
      buttons[0].setAttribute("disabled","disabled");
      buttons[1].setAttribute("disabled","disabled");
      buttons[2].removeAttribute("disabled");
    }
  }
  
  const onClickXO = (is_x) => {
    if (is_x === 0) {
      updateIsXchance(false);
    }
    else{
      updateIsXchance(true);
    }
    updateGameState(initialState)
  }
  
  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    if(strings[index] === ""){
      strings[index]= isXChance?"X":"O";
      updateIsXchance(!isXChance);
    }
    updateGameState(strings);
  }
  
  const onClear = () => {
    updateGameState(initialState);
    updateIsXchance(false);
  }

  useEffect(() => {
    const winner = checkWinner();
    if(winner){
      alert(`Yeah ! ${winner} has won the Game!`)
      onClear();
    }
  }, [gameState])

  const checkWinner = () => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
      const[a,b,c] = lines[i];
      if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="App-header">
        <p className="heading-text">Tic Tac Toe Game</p>
        <p className="start">Start with </p>
        <div className="row jc">
          <button id="o" className="xo-button" onClick={() => onClickXO(0)}> O </button>
          <button id="x" className="xo-button" onClick={() => onClickXO(1)}> X </button>
        </div>
        <div className=" row jc ">
          <SquareComponent className="border-br" state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
          <SquareComponent className="border-br" state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
          <SquareComponent className="border-b" state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
        </div>
        <div className=" row jc ">
          <SquareComponent className="border-br" state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
          <SquareComponent className="border-br" state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
          <SquareComponent className="border-b" state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
        </div>
        <div className=" row jc ">
          <SquareComponent className="border-r" state={gameState[6]} onClick={()=>onSquareClicked(6)}/>
          <SquareComponent className="border-r" state={gameState[7]} onClick={()=>onSquareClicked(7)}/>
          <SquareComponent state={gameState[8]} onClick={()=>onSquareClicked(8)}/>
        </div>
        <button id="clear" className="clear-button" onClick={() => onClear() } >Clear Game</button>
        <p className="made-by">Developed by Soham Patra</p>
    </div>
  );
  
}

export default App;
