import * as React from "react";
// import Header from './header/header';
import HomePage from './homePage/homePage';
import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Blog from './Blog';
//import Projects from './projects';
//import Mail from './mail';

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
              {/* <Route exact path="/projects">
                  <Projects />
              </Route>
              <Route exact path="/mail">
                  <Mail />
              </Route> */}
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default IndexPage
