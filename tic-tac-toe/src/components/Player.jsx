import {useState} from "react";

export default function Player({initialName, playerSymbol, isActive, onChange}) {

    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function editingName() {
       setEditing((editing) => !editing);

        if (isEditing){
            onChange(playerSymbol, playerName);
        }

    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }


    let content = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'


    if (isEditing){
        content = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = 'Save'
    }

    return (
        <li className={isActive ? "active" : ""}>
          <span className="player">
              {content}
              <span className="player-symbol">{playerSymbol}</span>
          </span>

            <button onClick={editingName}>{btnCaption}</button>
        </li>
    );
}