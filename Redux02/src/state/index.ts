import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "src/state/Todos";
import { Todo } from "src/types";

export const store = configureStore({
  reducer: { todos: todosReducer },
});

export type RootState = { todos: Todo[] };
