export default function GameOver({winner, onRestart}) {

    let content = <p>{winner} won!</p>

    if (winner === undefined){
        content = <p>Draw!</p>
    }

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {content}
            <button onClick={onRestart}>Rematch</button>
        </div>
    )
}