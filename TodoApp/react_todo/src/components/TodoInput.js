import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodo2 } from "../actions/index";

const TodoInput = () => {
   //local state => user input  => create a todo object  => add the todo object to array of todos
   //dispatch addTodo to reducers => reducer will udpate global state => the components will be impacted the global state/redux will be re-rendering
   //1 dispatch action to reducer => reducer will change state via the action => update state // all processes are sync
   //1 dispatch action  2. thunk will intercept the action and do some side effect actions/async actions => after the side effect action/async actions is done, will pass action to reducers
   const [userInput, setUserInput] = useState("");
   const dispatch = useDispatch();
   const handleAddTodo = () => {
      console.log(userInput);
      if (!userInput.trim()) {
         setUserInput("");
         return;
      }

      // 两种写法都可以
      addTodo(dispatch)(userInput);
      //dispatch(addTodo2(userInput));
      setUserInput("");
   };

   return (
      <div>
         <input
            type='text'
            value={userInput}
            onChange={(e) => {
               setUserInput(e.target.value);
            }}
         />
         <button onClick={handleAddTodo}>Add</button>
      </div>
   );
};

export default TodoInput;
