import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TodosContainer from './components/TodoContainer';
import "./assests/main.css"
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SignUpFrom from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import PrivateRoute from './components/ProtectedRoute';
import TodoContainer from './components/TodoContainer';
import CompletedTodos from './components/CompletedTodos';
import DeletedTodos from './components/DeletedTodos';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/signup">
              <SignUpFrom />
            </Route>
            <Route exact path="/login">
              <LogInForm />
            </Route>
            <PrivateRoute exact>
              <Route exact path="/">
                <TodoContainer />
              </Route>
              <Route exact path="/completed">
                <CompletedTodos />
              </Route>
              <Route exact path="/deleted">
                <DeletedTodos />
              </Route>
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
