import {ADD_TODO, DONE, DELETE, SIGNUP, LOGOUT, LOGIN} from './action-type';

const rootReducer = (state={todos: [], user: undefined, logedIn: false}, action) => {
    switch (action.type) {
        case ADD_TODO:
            const todo = {
                id: state.todos.length,
                completed: false,
                deleted: false,
                task: action.todo
            };
            const todos = [...state.todos, todo];
            return {...state, todos};
        case DONE:
            let todosCompleted = state.todos.slice();
            todosCompleted[action.index].completed= true;
            return {...state, todos: todosCompleted};
        case DELETE:
            const todosDeleted = state.todos.slice();
            todosDeleted[action.index].deleted = true;
            return {...state, todos: todosDeleted};
        case SIGNUP:
            return {todos: [], user: action.user, logedIn: true};
        case LOGIN:
            if (!state.user) return state;
            if (state.user.password === action.password && state.user.email === action.email) return {...state, logedIn: true};
            return state;
        case LOGOUT:
            return {...state, logedIn: false};
        default:
            return state;
    }
}

export default rootReducer;