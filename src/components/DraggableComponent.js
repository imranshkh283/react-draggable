import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";


const DraggableComponent = () => {

    const [note, setNote] = useState([]);

    const handleChange = (e) => {
        localStorage.setItem('note', JSON.stringify(e.target.value));
        setNote(e.target.value);
    }

    useEffect(() => {
        const savedNote = localStorage.getItem('note');
        if (savedNote) {
            setNote(JSON.parse(savedNote));
        }
    }, [])

    return (
        <Draggable>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'white', border: '1px solid white', borderRadius: '5px', padding: '20px', margin: '10px' }}
            >
                <textarea
                    value={note}
                    style={{ width: '100%', height: '100%', resize: 'none', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
                    onChange={handleChange}
                    placeholder="Enter your note here"
                >

                </textarea>
            </div>
        </Draggable>
    );
}

export default DraggableComponent;