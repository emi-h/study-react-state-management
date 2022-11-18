import type { NextPage } from "next";
import { useContext } from "react";
import { TodoContext } from "src/pages/_app";
import { Todo } from "src/types";

const Home: NextPage = () => {
  console.log("index comp");
  const { todos, setTodos } = useContext(TodoContext);

  const toggleIsDone = (id: Todo["id"]) => {
    // id確認
    // console.log(id);

    // クリックしたidとmapさせたidを比較して同じものであればisDone反転して返却
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // isDoneのみ反転させて上書き
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

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
