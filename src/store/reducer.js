import {ADD_TODO, DONE, DELETE} from './action-type';

const rootReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            const todo = {
                completed: false,
                deleted: false,
                task: action.todo
            }
            return [...state, todo];
        case DONE:
            const completedState = state.slice();
            completedState[action.index].completed= true;
            return completedState;
        case DELETE:
            const deletedState = state.slice();
            deletedState[action.index].deleted = true;
            return deletedState;
        default:
            return state;
    }
}

export default rootReducer;