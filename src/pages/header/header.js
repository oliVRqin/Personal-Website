import React from 'react';
import './header.css';
import Headshot from '../../images/personal_headshot.jpg';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div id="header">
            <div id="navName">
                <a href="http://localhost:8000/" id="name">Oliver Qin</a>
            </div>
            <div id="navHeadshot">
                <img src={Headshot} height="100%" width="100%" alt="Oliver Qin" />
            </div>
            <div id="navContent">
                <div id="navPages">
                    <a href="https://www.oliverqin.com/blog">
                        <Button color="secondary">
                            Blog
                        </Button>
                    </a>
                    <br></br>
                    <a href="https://www.oliverqin.com/blog">
                        <Button color="secondary">
                            Reading
                        </Button>
                    </a>
                    <br></br>
                    <a href="https://www.oliverqin.com/blog">
                        <Button color="secondary">
                            Projects
                        </Button>
                    </a>
                    <br></br>
                    <a href="https://www.oliverqin.com/bucket-list">
                        <Button color="secondary">
                            Bucket List
                        </Button>
                    </a>
                    <br></br>
                    <a href="https://www.oliverqin.com/join">
                        <Button color="secondary">
                            Monthly Mail
                        </Button>
                    </a>
                </div>
            </div>
            <br></br>
            <div id="navIcons">
                <IconContext.Provider value={{ color: 'black', size: '50px' }}>
                    <a href="https://github.com/oliVRqin" id="iconLink">
                        <FaGithub color="darkslategrey" />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#00aced', size: '50px' }}>
                    <a href="https://twitter.com/OliverQin1" id="iconLink">
                        <FaTwitter />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#006192', size: '50px' }}>
                    <a href="https://www.linkedin.com/in/oliverqin/" id="iconLink">
                        <FaLinkedin />
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Header;