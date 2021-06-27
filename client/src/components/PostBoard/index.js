import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function PostBoard() {
    return (
        <section className="postBoard">
            <div className="container-fluid">
            <img class="d-block w-100" src="/images/Layer_57.png" alt="board"/>
                <div className="carousel carousel-caption">
                    <h3 className="mt-5">POST WITH SIDEBAR</h3>
                    <WavySvg />
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item">Post</li>
                    </ol>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default PostBoard;