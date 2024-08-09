import React, { useReducer, useState } from "react";
import Todo from "./TodoForUseReducer.js";

const initalValue = [];

export const ACTIONS = {
  ADD_TODO: "Add-Todo",
  TOGGLE_TODO: "Toggle_Todo",
  DELETE_TODO: "Delete_Todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initalValue);
  const [name, setName] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    // e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName(""); // Reset input field after submission
  }
  console.log(todos);

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};

export default UseReducer;

// // Simple Example of useReducer Hook
// import React, { useReducer } from "react";

// const initialValue = {
//   count: 0,
// };

// const ACTIONS = {
//   INCREMENT: "Increment",
//   DECREMENT: "Decrement",
// };

// function reducer(state: { count: number }, action: { type: any }) {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialValue);

//   function increment() {
//     dispatch({ type: ACTIONS.INCREMENT });
//   }

//   function decrement() {
//     dispatch({ type: ACTIONS.DECREMENT });
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>{state.count}</span>
//       <button onClick={increment}>+</button>
//     </>
//   );
// };

// export default UseReducer;
