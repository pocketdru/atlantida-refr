import React, { Component } from "react";
import Nav from "../components/Nav";
import BlogPageBoard from "../components/BlogPageBoard";
import PostsBlog from "../components/PostsBlog";
import Form from "../components/Form";

class SideBarBlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BlogPageBoard />
                <PostsBlog />
                <Form />
            </div>
        )
    }
}

export default SideBarBlogPage;