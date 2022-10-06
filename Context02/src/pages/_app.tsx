import type { AppProps } from "next/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodoContext = createContext<{
  todos: Todo[];
  // useStateのsetTodosを確認して付与
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    // 必ず上書きされる関数なのでエラーとしておく
    throw Error("No default velue!");
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoContext.Provider>
  );
}

export default MyApp;
