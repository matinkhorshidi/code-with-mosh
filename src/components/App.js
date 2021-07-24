import React from 'react';
import NavBar from './NavBar';

import Movies from './MoviesComponents/Movies';
import Customers from './CounterComponents/Customers';
import Rentals from './Rentals';

import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Switch>
            <Route path="/Customers">
              <Customers />
            </Route>
            <Route path="/Rentals">
              <Rentals />
            </Route>
            <Route path="/Not-Found">
              <h1>NotFound</h1>
            </Route>
            <Route path="/Movies">
              <Movies />
            </Route>
            <Redirect from="/" to="/Movies" exact></Redirect>
            <Redirect to="/Not-Found"></Redirect>
          </Switch>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
