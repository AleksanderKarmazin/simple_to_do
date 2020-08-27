import React, { useState } from 'react'
import Note from './Note'


const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault()
    const id = (notes.length) ? notes[notes.length -1].id +1:0
    setNotes([...notes, { id: id, messege: input }])
    setInput('')
}

const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter(note => note.id != id))
}




export default () => {
    
    
    const [notes, setNotes] = useState([
        { id: 1, messege: 'It works' }
    ])

    const [input, setInput] = useState("")

    



    return (
        <div className='Notes'>
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
                <input onChange={(e) => setInput(e.target.value)} value={input}/> 
                <button>Submit </button>

            </form>
            {notes.map(note => (
                <Note messege={note.messege} id={note.id} deleteNote={(id) =>deleteNote(id, notes, setNotes)} />
            ))}

        </div>
    )
}
