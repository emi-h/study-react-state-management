import { FC } from "react";
import { useTodos } from "src/state/Todo";

export const TodoCounter: FC = () => {
  console.log("todoCount comp");
  const todos = useTodos();

  return <h2>TODO:{todos.length}件</h2>;
};
