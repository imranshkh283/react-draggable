import React, { useState } from 'react';

const NoteTextarea = ({ note, handleNoteChange }) => {
    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'lightblue',
                border: '1px solid blue',
                borderRadius: '5px',
                padding: '20px',
                margin: '10px 0'
            }}>
            <textarea
                value={note.context}
                onChange={(e) => handleNoteChange(e.target.value)}
                placeholder='Write your note here ...'
                style={{ width: '100%', height: '100%', resize: 'none', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
            >
            </textarea>
        </div>
    )
}

export default NoteTextarea;