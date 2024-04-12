import React, { useState } from "react";
import Draggable from "react-draggable";

const DraggableComponent = () => {

    const [note, setNote] = useState('');

    return (
        <Draggable>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', border: '1px solid blue', borderRadius: '5px', padding: '20px' }}
            >
                <textarea
                    style={{ width: '100%', height: '100%', resize: 'none', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
                >

                </textarea>
            </div>
        </Draggable>
    );
}

export default DraggableComponent;