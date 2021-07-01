import React from "react";
function Border() {
    return (
        // making a gap in the border
        <div>
            <div className="title-border title-border-top-left"></div>
            <div className="title-border title-border-bottom-left"></div>
            <div className="title-border title-border-top-right"></div>
            <div className="title-border title-border-bottom-right"></div>
        </div>
    )
}

export default Border;