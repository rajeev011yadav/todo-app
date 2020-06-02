import {ADD_TODO, DONE, DELETE, SIGNUP, LOGOUT, LOGIN} from './action-type';

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

export const signUp = user => {
    return {
        type: SIGNUP,
        user,
    };
};

export const logOut = () => {
    return {type: LOGOUT}
}

export const logIn = ({email, password}) => {
    return {type: LOGIN, email, password};
}