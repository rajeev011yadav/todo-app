import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    
    handleInput(e) {
        
        this.setState({
            input: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.input){
            this.props.addTodo(this.state.input);
            this.setState({input: ''})
        }
        
    }
    
    handleDone(e) {
        const index = e.target.parentElement.parentElement.getAttribute('index');
        this.props.done(index);
    }
    
    render() {
        return (
         <div className="todo-box">
          <ul className="todo-list">
            {this.props.todos.map((todo, i) => {
                return (<li key={i} index={i}>
                    <div className="todo">
                        <p>{todo.task}</p>
                        <button className="btn delete">Delete</button>
                        {!todo.completed && <button className="btn done" onClick={this.handleDone}>Done</button>}
                    </div>
                </li>);
            })}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.input} name="newTodo" onChange={this.handleInput} autoComplete="off"/>
            <input type="submit" value="Add Todo" />
          </form>
         </div>
        );
    }
}

export default TodoList;