import React from "react";
function Header({ prop }) {
    return (
        <div className="header">
            <h1 className="notes__title">{prop}</h1>
        </div>
    );
}
export default Header;