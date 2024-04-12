import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import NoteTextarea from './NoteTextarea';

const DraggableComponent = () => {
    const [notes, setNotes] = useState([]);

    const handleAddNote = () => {
        const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setNotes([...notes, { id: notes.length + 1, color: randomColor }]);
    };

    const handleNoteChange = (id, content) => {
        setNotes(notes.map(note => (note.id === id ? { ...note, context: content } : note)));
    }

    useEffect(() => {
        setNotes([{ id: 1, color: '#ff9999' }]);
    }, [])

    return (
        <div>
            <button onClick={handleAddNote}>Add Draggable Div</button>
            {notes.map(note => (
                <Draggable key={note.id}>
                    <div style={{ width: '200px', height: '200px', backgroundColor: note.color }}>
                        <NoteTextarea
                            handleNoteChange={(content) => handleNoteChange(content)}
                            key={note.id}
                            note={note} />
                    </div>
                </Draggable>
            ))}
        </div>
    );
}

export default DraggableComponent;