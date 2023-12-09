const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'
  return (
    <li className="note"><span>{note.content}</span> <button onClick={toggleImportance}>{label}</button></li>
    //<li className='note'>Your awesome note: {note.content}<button onClick={toggleImportance}>{label}</button></li>
  )
}

export default Note