import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function BlogPageBoard() {
    return (
        <section className="BlogPageBoard">
            <div className="container-fluid">
                <div className="carousel carousel-caption">
                    <h3 className="mt-5">BLOG WITH SIDEBAR</h3>
                    <WavySvg />
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item" aria-current="#blog">Blog</li>
                    </ol>
                    </nav>
                </div>
            </div>
        </section>
    )}

export default BlogPageBoard;