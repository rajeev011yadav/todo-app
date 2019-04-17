import {ADD_TODO} from './action-type';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    }
}