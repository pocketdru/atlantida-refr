import React, { Component } from "react";
import Nav from "../components/Nav";
import BlogPageBoard from "../components/BlogPageBoard";
import PostsBlog from "../components/PostsBlog";

class SideBarBlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BlogPageBoard />
                <PostsBlog />
            </div>
        )
    }
}

export default SideBarBlogPage;