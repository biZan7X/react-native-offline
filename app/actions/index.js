import {createAction} from 'redux-act';

const getUsers = createAction('GETUSERS');

const setUsers = createAction('SETUSERS');

export {getUsers, setUsers};
