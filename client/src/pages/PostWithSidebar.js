import React, { Component } from "react";
import Nav from "../components/Nav";
import PostBoard from "../components/PostBoard";
import Post from "../components/Post";
import Footer from "../components/Footer";

class PostWithSidebar extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <PostBoard />
                <Post />
                <Footer />
            </div>
        )
    }
}

export default PostWithSidebar;