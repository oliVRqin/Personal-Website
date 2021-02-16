import * as React from "react";
import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/homePage.js';
import Blog from './Blog/blog.js';
import Reading from './Reading/Reading';
import Projects from './Projects/Projects';
import List from './List/List';
import Mail from './Mail/Mail';

const IndexPage = () => {
  return (
    <div id="content">
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="/blog">
                  <Blog />
              </Route>
              <Route exact path="/reading">
                  <Reading />
              </Route>
              <Route exact path="/projects">
                  <Projects />
              </Route>
              <Route exact path="/list">
                  <List />
              </Route>
              <Route exact path="/mail">
                  <Mail />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default IndexPage;
