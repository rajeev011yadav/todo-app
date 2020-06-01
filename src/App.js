import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TodosContainer from './components/TodoContainer';
import "./assests/main.css"
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SignUpFrom from './components/SignUpForm';
import LogInForm from './components/LogInForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact  path="/">
              <TodosContainer />
            </Route>
            <Route exact path="/signup">
              <SignUpFrom />
            </Route>
            <Route exact path="/login">
              <LogInForm />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
