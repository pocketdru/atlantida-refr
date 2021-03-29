import React, { Component } from "react";
import Nav from "../components/Nav";
import BlogBoard from "../components/BlogBoard";
import FullBlog from "../components/FullBlog";

class BlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BlogBoard/>
                <FullBlog/>
            </div>
        )
    }
}

export default BlogPage;