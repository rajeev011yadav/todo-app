import React, {Component} from 'react';
import {addTodo, done, remove_todo} from '../store/action-creator';
import {connect} from 'react-redux';
import TodoList from './TodoList'

class TodosContainer extends Component {

    render() {

        return (
                <TodoList 
                    todos={this.props.todos} 
                    addTodo={this.props.addTodo} 
                    done={this.props.done} 
                    delete={this.props.remove_todo}/>
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
        },
        
        remove_todo: (index) => {
            dispatch(remove_todo(index));
        }
    };
}

export default connect(matchPropToState, matchDispathToState)(TodosContainer);