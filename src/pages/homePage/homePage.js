import React from 'react';
import './homePage.css';
import Header from '../Header/header.js';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div id="pageContent">
            <Header />
            <div id="homePageContent">
                <h1>Hi, I'm Oliver.</h1>
                <br></br>
                <p id="homePageDescription">I go to Carnegie Mellon University with a major in Statistics and Machine Learning. This semester, I 
                am doing mixed reality research on how the positioning of virtual elements in users’ field of view influences noticeability, saliency, 
                and readability. <br></br>
                <br></br>
                I love thinking about how technological advancements could possibly shape the future of our world, and am particularly interested 
                in how virtual reality could possibly allow immersive “virtual worlds" to be built in the future. I also reflect a lot, and through my journey 
                of running into new perspectives I will write some of them on this <Link to="/blog">blog</Link>. <br></br>
                <br></br>
                Outside of school I love to explore the outdoors, and you could usually find me either <a href="https://www.strava.com/athletes/55703624">going for a run, biking 
                around Pittsburgh</a>, or playing basketball. I like to experience and learn new things, and am always down for an adventure or two! Some adventures I wish to 
                experience/goals I want to accomplish in the years ahead are <Link to="/list">here</Link>. <br></br>
                <br></br>
                If you're into amateur photography (mostly of the landscape variety), feel free to <a href="https://www.instagram.com/oliver_qin_ph/">check out some photos</a> I take in my free time.<br></br>
                <br></br>
                Finally, if you like what you see, join my mailing list below! Some thoughts do not fit perfectly well in a single blog post or tweet, and they will instead come through the mailing list.
                </p>
                <br></br>
                <form action="">
                    <div id="joinMailForm">
                        <input type="text" placeholder="Email Address"></input>
                        <button id="joinMailButton">Join</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomePage;