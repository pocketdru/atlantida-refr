import React, { Component } from "react";
import Nav from "../components/Nav";
import BlogPageBoard from "../components/BlogPageBoard";
import PostsBlog from "../components/PostsBlog";
import Footer from "../components/Footer";

class SideBarBlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <BlogPageBoard />
                <PostsBlog />
                <Footer />
            </div>
        )
    }
}

export default SideBarBlogPage;