import {ADD_TODO, DONE} from './action-type';

const rootReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            const todo = {
                completed: false,
                task: action.todo
            }
            return [...state, todo];
        case DONE:
            const newState = state.slice();
            newState[action.index].completed= true;
            return newState;
        default:
            return state;
    }
}

export default rootReducer;