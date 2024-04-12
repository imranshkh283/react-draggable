import React from "react";
const header = (prop) => {
    return (
        <div className="header">
            <h1 className="notes__title">{prop.name}</h1>
        </div>
    );
}
export default header;