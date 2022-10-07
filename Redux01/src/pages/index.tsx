import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state";
import { toggleTodo } from "src/state/Todos";
import { Todo } from "src/types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = ({ setTodos }) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const toggleIsDone = (id: Todo["id"]) => {
    // クリックしたidとmapさせたidを比較して同じものであればisDone反転して返却
    // setTodos((prevTodos) => {
    //   return prevTodos.map((todo) => {
    //     if (todo.id === id) {
    //       // isDoneのみ反転させて上書き
    //       return { ...todo, isDone: !todo.isDone };
    //     }
    //     return todo;
    //   });
    // });
    dispatch(toggleTodo(id));
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
