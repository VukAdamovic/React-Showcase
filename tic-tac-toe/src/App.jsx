import Player from "./components/Player.jsx";
import {useState} from "react";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initalGameBoard = [
    [null,  null,  null],
    [null,  null,  null],
    [null,  null,  null]
];

function deriveGameBoard(gameTurns){
    let gameBoard = [...initalGameBoard.map(array => [...array])];

    for (const turn of gameTurns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function deriveActivePLayer(gameTurns){
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function deriveWinner(gameBoard,players){
    let winner;

    for (const winningcombination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[winningcombination[0].row][winningcombination[0].column]
        const secondSquareSymbol = gameBoard[winningcombination[1].row][winningcombination[1].column]
        const thirdSquareSymbol = gameBoard[winningcombination[2].row][winningcombination[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}


function App() {
    const [players, setPlayers]= useState({
        X: "Player 1",
        O: "Player 2"
    })
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePLayer(gameTurns);

    const gameBoard = deriveGameBoard(gameTurns);

    const winner = deriveWinner(gameBoard, players);

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex){

        setGameTurns(prevTurns => {
            let currentPlayer = deriveActivePLayer(prevTurns);

            const updatedTurns = [
                { square: {row: rowIndex, col: colIndex}, player : currentPlayer },
                ...prevTurns
            ];

            return updatedTurns
        });
    }


    function handleRestart() {
        setGameTurns([]);
    }

    function handlePLayerNameChange(symbol, newName){
        setPlayers(prevPlayers => {
            return{
                ...prevPlayers,
                [symbol] : newName
            }
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'} onChange = {handlePLayerNameChange}/>
                    <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} onChange = {handlePLayerNameChange}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/> }
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
