import React, { Component } from "react";
import Nav from "../components/Nav";
import SidebarBlog from "../components/SidebarBlog";

class SideBarBlogPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <SidebarBlog />
            </div>
        )
    }
}

export default SideBarBlogPage;