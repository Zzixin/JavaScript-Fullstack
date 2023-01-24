//1. add todo
//2. mod todo
//3. del todo
import { todoApi } from "../api";
export const ADD_TODO = "ADD_TODO";
export const MOD_TODO = "MOD_TODO";
export const DEL_TODO = "DEL_TODO";
export const INIT_TODO = "INIT_TODO";

export const initTodo = (dispatch) => async () => {
   try {
      const todos = await todoApi.getAllTodos();
      dispatch({
         type: INIT_TODO,
         payload: todos,
      });
   } catch (error) {
      // 更多的error state可以在reducer中体现
      console.log(error);
   }
};

export const addTodo = (dispatch) => async (content) => {
   try {
      const result = await todoApi.addTodo({
         content,
         isCompleted: false,
      });
      console.log(result);
      dispatch({
         type: ADD_TODO,
         payload: {
            content,
            isCompleted: false,
         },
      });
      console.log(result);
   } catch (error) {
      console.log(error);
   }
};

export const addTodo2 = (content) => {
   return {
      type: ADD_TODO,
      payload: {
         content,
         isCompleted: false,
      },
   };
};

export const modTodo = (dispatch) => async (index) => {
   try {
      const result = await todoApi.modTodo(index);
      dispatch({
         type: MOD_TODO,
         payload: index,
      });
      console.log(result);
   } catch (error) {
      console.log(error);
   }
};

export const delTodo = (dispatch) => async (index) => {
   try {
      const result = await todoApi.delTodo(index);
      dispatch({
         type: DEL_TODO,
         payload: index,
      });
      console.log(result);
   } catch (error) {
      console.log(error);
   }
};
