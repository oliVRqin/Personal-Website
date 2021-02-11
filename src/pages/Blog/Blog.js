import React from 'react';
import Header from '../Header/Header';
import './Blog.css';

const Blog = () => {
    return (
        <div id="pageContent">
            <Header />
            <div id="blogContent">
                <h1>Blog</h1>
                <br></br>
                <p id="blogDescription">Ba da bee ba da byee</p>
            </div>
        </div>
    );
};

export default Blog;