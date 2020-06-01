import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleInput(e) {
        this.setState({
            input: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.input){
            this.props.addTodo(this.state.input);
            this.setState({input: ''});
        }
        
    }
    
    handleDone(index) {
        this.props.done(index);
    }
    
    handleDelete(index) {
        this.props.delete(index);
    }
    
    render() {
        return (
            <div className="card mx-auto mt-5 todo-list" style={{"width": 400}}>
                <div  className="card-body">
                    <ul className="list-group">
                        {this.props.todos.map((todo, i) => {
                            return (!todo.deleted && 
                                    <Todo todo={todo} key={i}
                                           id={i}
                                           handleDelete={() => this.handleDelete(i)}
                                           handleDone={() => this.handleDone(i)}
                                    />
                            );
                        })}
                    </ul>
                </div>
            <div className="card-footer">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control flex-grow-1"type="text" value={this.state.input} name="newTodo" onChange={this.handleInput} autoComplete="off"/>
                    <button type="submit" className={"btn btn-primary"}>Add todo</button>
                </form>
            </div>
          </div>
        );
    }
}

export default TodoList;