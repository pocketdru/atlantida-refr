import React from "react";
import "./style.css";
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ModalWindow() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <h3>You can quicly navigate between the pages!</h3>
          </Modal.Header>
          <Modal.Body>
              <p className="card-text">Click on the link, close the window.</p>
            <nav className="nav navbar">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/blog">Blog Page</a>
                <a className="nav-link" href="/blog_sidebar">Blog with sidebar</a>
                <a className="nav-link" href="/post_sidebar">Post with sidebar</a>          
            </nav>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }


export default ModalWindow;