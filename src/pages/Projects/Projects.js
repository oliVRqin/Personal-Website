import React from 'react';
import Header from '../Header/Header';
import './Projects.css';

const Projects = () => {
    return (
        <div id="pageContent">
            <Header />
            <div id="projectContent">
                <h1>Projects</h1>
                <br></br>
                <p id="projectDescription">All dem projects here</p>
            </div>
        </div>
    );
};

export default Projects;