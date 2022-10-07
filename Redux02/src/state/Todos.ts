import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/types";

const initialState: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "foo2", isDone: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState, //keyとvalueが同じなので省略
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      // ▼▼▼[mutable way]
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      });

      // ▼▼▼[immutable way]
      // const newTodo = {
      //   id: state.length + 1,
      //   text: action.payload.text,
      //   isDone: false,
      // };
      // return [...state, newTodo];
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      // ▼▼▼[mutable way]
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
      });

      // ▼▼▼[immutable way]
      // const newState = state.map((todo) => {
      //   if (todo.id === action.payload.id) {
      //     return { ...todo, isDone: !todo.isDone };
      //   }
      //   return todo;
      // });
      // return newState;
    },
  },
});

// reducerがactionsに入っているのでexport
// 分割代入すれば個数が多くなってもOK
export const { addTodo, toggleTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
