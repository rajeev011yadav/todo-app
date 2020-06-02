import React, {Component} from 'react';
import Todo from './Todo';
import TodoAddForm from './TodoAddForm';

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

    todosList() {
        const todos = this.props.todos.filter((todo) => todo.deleted===false)
        .map((todo, i) => (
                <Todo todo={todo} key={todo.id}
                      id={i}
                      handleDelete={() => this.handleDelete(todo.id)}
                      handleDone={() => this.handleDone(todo.id)}
                />
            ));
        return todos.length === 0 ? <div className="test-muted text-center">No Todo</div> : todos;
    }
    
    render() {
        return (
            <div className="card mx-auto mt-5 todo-list" style={{"width": 400}}>
                <div  className="card-body">
                    <ul className="list-group">
                        {this.todosList()}
                    </ul>
                </div>
            <div className="card-footer">
                <TodoAddForm todo={this.state.input} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
            </div>
          </div>
        );
    }
}

export default TodoList;