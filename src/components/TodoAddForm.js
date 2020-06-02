import React from "react"

const TodoAddForm = ({todo, handleSubmit, handleInput}) => {
    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <input className="form-control flex-grow-1"type="text" value={todo} name="newTodo" onChange={handleInput} autoComplete="off"/>
            <button type="submit" className={"btn btn-primary"}>Add todo</button>
        </form>
    );
}

export default TodoAddForm;