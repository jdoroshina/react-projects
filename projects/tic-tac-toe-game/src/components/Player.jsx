import { useState } from 'react';

export default function Player({initialName, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [ playerName, setPlayerNAme ] = useState(initialName);

  function handleEditClick() {
    setIsEditing(editing => !editing); // best practise to update state based on old state!
  };

  function handleChange(event) {
    setPlayerNAme(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type='text' required defaultValue={playerName} on onChange={handleChange} />;
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}