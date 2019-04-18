import React, {Component} from 'react';
import {addTodo, done} from '../store/action-creator';
import {connect} from 'react-redux';
import TodoList from './todo-list'

class TodosContainer extends Component {

    render() {
        return (
             <TodoList todos={this.props.todos} addTodo={this.props.addTodo} done={this.props.done}/>
            );
    }
}

const matchPropToState = (store) => {
    return {todos: store};
}

const matchDispathToState = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        },
        done: (index) => {
            dispatch(done(index));
        }
    };
}

export default connect(matchPropToState, matchDispathToState)(TodosContainer);