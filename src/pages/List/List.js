import React from 'react';
import './List.css';
import Header from '../Header/Header.js';

const List = () => {
    return (
        <div id="pageContent">
            <Header />
            <div id="listContent">
                <h1>My Bucket List</h1>
                <br></br>
                <p id="listDescription">Some things that I aspire to do within my lifetime. 
                This is a list that I decided to make on New Year's Day of 2020. I had always wanted 
                to make a Bucket List, and it felt appropriate to reflect on it at the beginning of 
                a new decade. This list is subject to change from time to time.</p>
                <br></br>
                <ul>
                    <li id="listDescription">
                        Have a "Big 3" (Bench + Squat + Deadlift) of 800.
                    </li>
                    <li id="listDescription">
                        Run a marathon.
                    </li>
                    <li id="listDescription">
                        Go skydiving.
                    </li>
                    <li id="listDescription">
                        Drive across the United States.
                    </li>
                    <li id="listDescription">
                        Bike across the United States.
                    </li>
                    <li id="listDescription">
                        Fly an airplane across the United States.
                    </li>
                    <li id="listDescription">
                        Take a train across the United States.
                    </li>
                    <li id="listDescription">
                        See the Northern Lights.
                    </li>
                    <li id="listDescription">
                        Travel to all 7 continents.
                    </li>
                    <li id="listDescription">
                        Experience the night markets of Seoul, Tokyo, and Taipei.
                    </li>
                    <li id="listDescription">
                        Reside in a foreign country for over six months.
                    </li>
                    <li id="listDescription">
                        Become financially independent.
                    </li>
                    <li id="listDescription">
                        Write a book.
                    </li>
                    <li id="listDescription">
                        Save a life.
                    </li>
                    <li id="listDescription">
                        Have kids.
                    </li>
                    <li id="listDescription">
                        Create an organization that optimizes giving resources to those in need.
                    </li>
                    <li id="listDescription">
                        Create a website/service that has been viewed by over 1,000,000 people.
                    </li>
                    <li id="listDescription">
                        Own an airplane.
                    </li>
                    <li id="listDescription">
                        Own a boat.
                    </li>
                    <li id="listDescription">
                        Own a pet dog.
                    </li>
                    <li id="listDescription">
                        Interview Elon Musk.
                    </li>
                    <li id="listDescription">
                        Interview The Candourist (JP).
                    </li>
                    <li id="listDescription">
                        Interview Josh Katz.
                    </li>
                    <li id="listDescription">
                        Interview an aspiring entrepreneur.
                    </li>
                    <li id="listDescription">
                        Interview an entrepreneur.
                    </li>
                    <li id="listDescription">
                        Make a podcast/channel that contains over 50 guests that I interview individually.
                    </li>
                    <li id="listDescription">
                        Learn to edit photos and videos effectively.
                    </li>
                    <li id="listDescription">
                        Learn a new language.
                    </li>     
                </ul>
            </div>
        </div>
    );
}

export default List;