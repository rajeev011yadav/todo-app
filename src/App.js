import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TodosContainer from './components/TodoContainer';
import "./assests/main.css"
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <TodosContainer />
      </Provider>
    );
  }
}

export default App;
