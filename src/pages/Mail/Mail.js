import React from 'react';
import Header from '../Header/Header';
import './Mail.css';

const Mail = () => {
    return (
        <div id="pageContent">
            <Header />
            <div id="mailContent">
                <h1>Join My Mailing List</h1>
                <br></br>
                <p id="mailDescription">The purpose of this mailing list is to add another avenue that expresses 
                    some interesting and informative perspectives I've found. A variety of topics 
                    spark my interest; from virtual reality to traveling to options trading: who 
                    knows, maybe you'll be interested in them too. There is never a limit to learning 
                    more, so come sign up!</p>
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

export default Mail;