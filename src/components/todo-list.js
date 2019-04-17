import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    render() {
        return (
         <div className="todo-box">
          <ul className="todo-list">
            {this.props.todos.map((todo, i) => {
                return (<li className="todo" key={i}>{todo}</li>);
            })}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.input} name="newTodo" onChange={this.handleInput}/>
            <input type="submit" value="Add Todo" />
          </form>
         </div>
        );
    }
}

export default TodoList;