import {ADD_TODO} from './action-type';

const rootReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        default:
            return state;
    }
}

export default rootReducer;