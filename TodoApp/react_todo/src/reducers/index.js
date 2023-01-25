// we could put all todos into redux store
// 接收action发送的东西
import { combineReducers } from 'redux';
import {
  ADD_TODO,
  MOD_TODO,
  DEL_TODO,
  INIT_TODO,
  ERROR,
  RESET_ERROR,
} from '../actions/index';

export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case INIT_TODO:
      return [...payload];
    case ADD_TODO:
      return [...state, { ...payload }];
    case MOD_TODO:
      return state.map((todo, index) => {
        if (payload !== index) {
          return todo;
        }
        return { ...todo, isCompleted: !todo.isCompleted };
      });
    case DEL_TODO:
      return [...state.slice(0, payload), ...state.slice(payload + 1)];
    default:
      return state;
  }
};

// state can be given a default value
export const errorReducer = (
  state = { error: false, message: '' },
  { type, payload }
) => {
  switch (type) {
    case ERROR:
      return { ...state, ...payload };
    case RESET_ERROR:
      return { error: false, message: '' };
    default:
      return state;
  }
};

// 合并成一个reducer
// useSelector 来选择 reducer
export default combineReducers({
  // alien_name: real name
  todos: reducer,
  error: errorReducer,
});
