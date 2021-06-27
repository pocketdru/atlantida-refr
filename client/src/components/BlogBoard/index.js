import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function BlogBoard() {
    return (
        <section className="bigBlog">
            <div className="container-fluid">
                <img className="d-block w-100" src="/images/blogBoard/Image.png" alt="board"/>

                <div className="carousel carousel-caption">
                    <h3 className="mt-5">MASONRY BLOG</h3>
                    <WavySvg />
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item">Blog</li>
                    </ol>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default BlogBoard;