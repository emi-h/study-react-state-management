import type { NextPage } from "next";
import { useTodos, useTodosDispatch } from "src/state/Todo";

const Home: NextPage = () => {
  console.log("index comp");
  const todos = useTodos();
  const { toggleIsDone } = useTodosDispatch();

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              // 引数にtodo.idが欲しいので、関数が入る
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
