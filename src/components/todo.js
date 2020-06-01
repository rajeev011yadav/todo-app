import React from 'react';

const Todo = ({id, todo, handleDelete, handleDone}) => {
    return (
        <li className="list-group-item py-1 px-1" >
            <div className="d-flex">
                <spand className="p-2">{id+1}. {todo.task}</spand>
                <div className="ml-auto">
                    <button className="btn btn-danger mr-2" onClick={handleDelete}>Delete</button>
                    {!todo.completed && <button className="btn btn-success" onClick={handleDone}>Done</button>}
                </div>
            </div>
        </li>
    );
};

export default Todo;
