// we could put all todos into redux store
import { ADD_TODO, MOD_TODO, DEL_TODO } from "../actions/index";

export const reducer = (state = [], { type, payload }) => {
   switch (type) {
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
