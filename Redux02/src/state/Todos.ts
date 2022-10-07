import { Reducer, useDebugValue } from "react";
import { Todo } from "src/types";

// 🌟const
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// 🌟action
//後でView側から使われるAction
export const addTodo = (text: Todo["text"]) => {
  // as constでワイドニング防止("ADD_TODO"をストリングリテラルタイプに)
  return { type: ADD_TODO, payload: { text } } as const;
};
export const toggleTodo = (id: Todo["id"]) => {
  // as constでワイドニング防止("ADD_TODO"をストリングリテラルタイプに)
  return { type: TOGGLE_TODO, payload: { id } } as const;
};

// addTodoの返り値を受け取るためにReturnType(TypeScriptの組込み)を使用
type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// 🌟initial state
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "foo2", isDone: true },
];

// 🌟reducer
//[point!!] prev state + action =new state
// 新しい状態を返す
export const todosReducer: Reducer<Todo[], Action> = (
  state = TODOS,
  action
) => {
  // switchでactionを絞り込む
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
};
