import React from 'react';
import Header from '../Header/Header.js';
import './Blog.css';

const Blog = () => {
    return (
        <div id="pageContent">
            <Header />
            <div id="blogContent">
                <h1>Blog</h1>
                <br></br>
                <p id="blogDescription">Some things that I aspire to do within my lifetime. 
                This is a list that I decided to make on New Year's Day of 2020. I had always wanted 
                to make a Bucket List, and it felt appropriate to reflect on it at the beginning of 
                a new decade. This list is subject to change from time to time.</p>
            </div>
        </div>
    );
};

export default Blog;