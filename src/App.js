import { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text:'This is the first note',
    date:'25/12/2022'
  },
  {
    id: nanoid(),
    text:'This is the second note',
    date:'27/12/2022'
  },
  {
    id: nanoid(),
    text:'This is the third note',
    date:'29/12/2022'
  }

]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes (newNotes);
  }


  const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
  }

  return <div className="container">
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>

  </div>
}

export default App;