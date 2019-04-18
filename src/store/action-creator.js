import {ADD_TODO, DONE} from './action-type';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const done = index => {
    return {
        type: DONE,
        index
    }
}