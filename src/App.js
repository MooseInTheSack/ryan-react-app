import React, { Fragment }  from 'react';
import './App.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Carousel from './components/Carousel/Carousel'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

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
              <Tabs centered={true} value={location.pathname}>
                <Tab value="/" label="Home" component={Link} to="/" />
                <Tab value="/gallery" label="Gallery" component={Link} to="/gallery" />
                <Tab value="/carousel" label="Carousel" component={Link} to="/carousel" />
                <Tab value="/about"
                  label="About"
                  href="#basic-tabs"
                  component={Link}
                  to="/about"
                />
                <Tab value="/contact" label="Contact" component={Link} to="/contact" />
              </Tabs>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/carousel">
                  <Carousel />
                </Route>
                <Route path="/gallery">
                  <Gallery />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
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
