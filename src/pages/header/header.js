import React from 'react';
import './header.css';

//import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div id="header">
            <h1>Oliver Qin</h1>
            <p>Learning new things everyday.</p>
            <p>Currently interested in virtual reality and full stack development.</p>
            {/* <Link to="/blog">
                <button>Blog</button>
            </Link> */}
        </div>
    );
};

export default Header;