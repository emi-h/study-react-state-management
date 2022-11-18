import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// 参照系Context
export const TodosContext = createContext(TODOS);
// 更新系Context
export const TodosDispatchContext = createContext<{
  toggleIsDone: (id: Todo["id"]) => void;
  addTodo: (text: Todo["text"]) => void;
}>({
  toggleIsDone: () => {
    throw Error("No default velue!");
  },
  addTodo: () => {
    throw Error("No default velue!");
  },
});

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  // todosの更新が起きても再生成されないようにuseCallback使用＋空配列
  const toggleIsDone = useCallback((id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  }, []);

  // todosの更新が起きても再生成されないようにuseCallback使用＋空配列
  const addTodo = useCallback((text: Todo["text"]) => {
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
  }, []);

  // オブジェクトも再生成されないようuseMemo使用
  const TodosDispatchValue = useMemo(() => {
    return { toggleIsDone, addTodo };
  }, [toggleIsDone, addTodo]);

  return (
    // 無駄な再レンダリングが走らないように、参照系と更新系は別にする
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={TodosDispatchValue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

// importを簡略化
export const useTodos = () => {
  const todos = useContext(TodosContext);
  return todos;
};

// importを簡略化
export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext);
};
