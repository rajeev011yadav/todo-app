import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import {done, remove_todo} from "../store/action-creator"

const DeletedTodos = ({todos, remove_todo, done}) => {
    const getTodos = () => {
        let todosJSX = todos.filter(todo =>todo.deleted === true)
            .map(todo=>{console.log(todo); return todo;})
            .map((todo, id) => (
                <Todo key={todo.id} id={id} todo={todo} handleDelete={() => remove_todo(todo.id)} handleDone= {() => done(todo.id)}/>
            ));
        return todosJSX.length > 0 ? todosJSX : <div className="text-muted text-center">No Deleted Todos</div>
    }
    return (
        <div className="card mx-auto mt-5 todo-list" style={{"width": 400}}>
            <div  className="card-body">
                <ul className="list-group">
                    {
                        getTodos()
                    }
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    todos: store.todos,
})

const mapDispathToState = (dispatch) => {
    return {
        done: (index) => {
            dispatch(done(index));
        },
        remove_todo: (index) => {
            dispatch(remove_todo(index));
        }
    };
}

export default connect(mapStateToProps, mapDispathToState)(DeletedTodos);