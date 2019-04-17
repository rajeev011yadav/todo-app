import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TodosContainer from './components/todos-container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <TodosContainer />
      </Provider>
    );
  }
}

export default App;
