import React from "react";
import { ACTIONS } from "./UseReducer.tsx";

export default function TodoForUseReducer({ todo, dispatch }) {
  return (
    <>
      <p style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</p>

      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete
      </button>
    </>
  );
}
