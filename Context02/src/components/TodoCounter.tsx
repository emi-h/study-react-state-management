import { FC, useContext } from "react";
import { TodoContext } from "src/pages/_app";

export const TodoCounter: FC = () => {
  console.log("todoCount comp");
  const { todos } = useContext(TodoContext);
  console.log(todos);

  return <h2>TODO:{todos.length}件</h2>;
};
