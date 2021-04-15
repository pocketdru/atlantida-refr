import React, { Component } from "react";
import Nav from "../components/Nav";
import PostBoard from "../components/PostBoard";
import Post from "../components/Post";
import Form from "../components/Form";

class PostWithSidebar extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <PostBoard />
                <Post />
                <Form />
            </div>
        )
    }
}

export default PostWithSidebar;