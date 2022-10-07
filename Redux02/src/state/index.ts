import { combineReducers, legacy_createStore } from "redux";
import { todosReducer } from "src/state/Todos";
import { Todo } from "src/types";

// ①storeを作成 → ②_appでimport　→　③Reducerをimport
export const store = legacy_createStore(
  combineReducers({ todos: todosReducer })
);

//storeコンポーネントに含まれる関数getStateの戻り値の型から、新しい型を作る
// export type RootState = ReturnType<typeof store.getState>;
// ↑(method) Store<EmptyObject & { todos: never; }, { readonly type: "ADD_TODO"; readonly payload: { readonly text: string; }; }>.getState(): EmptyObject & {todos: never;}
// [FIX ME]
export type RootState = { todos: Todo[] };
