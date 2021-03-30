import React, { Component } from "react";
import Nav from "../components/Nav";
import BlogBoard from "../components/BlogBoard";
import FullBlog from "../components/FullBlog";
import Form from "../components/Form";

class BlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BlogBoard/>
                <FullBlog/>
                <Form/>
            </div>
        )
    }
}

export default BlogPage;