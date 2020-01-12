import React, { Fragment }  from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className="App">
      <Container maxWidth="md">

        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs centered="true" value={location.pathname}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Gallery" component={Link} to="/gallery" />
                <Tab
                  label="About"
                  href="#basic-tabs"
                  component={Link}
                  to="/about"
                />
              </Tabs>
              <Switch>
                <Route path="/about" render={About} />
                <Route path="/gallery" render={Gallery} />
                <Route path="/" render={Home} />
              </Switch>
            </Fragment>
          )}
        />
        </Container>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
