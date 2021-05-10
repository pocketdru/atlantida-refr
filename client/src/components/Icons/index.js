import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

function Icons () {
    return (
        <div className="icons">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faBehance} />
        </div>
    )   
}

export default Icons;