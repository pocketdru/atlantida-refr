import React, { Component } from "react";
import Nav from "../components/Nav";
import BigBlog from "../components/BigBlog";

class BlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BigBlog/>
            </div>
        )
    }
}

export default BlogPage;