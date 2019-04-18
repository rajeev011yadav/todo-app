import {ADD_TODO, DONE, DELETE} from './action-type';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    };
};

export const done = index => {
    return {
        type: DONE,
        index
    };
};

export const remove_todo = index => {
    return {
        type: DELETE,
        index
    };
};