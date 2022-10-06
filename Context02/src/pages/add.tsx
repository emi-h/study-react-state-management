import type { NextPage } from "next";
import { ComponentProps, useContext } from "react";
import { TodoContext } from "src/pages/_app";

const Add: NextPage = () => {
  console.log("add comp");
  const { setTodos } = useContext(TodoContext);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    // フォームのデフォルトの挙動はOFF
    event.preventDefault();
    // テキスト取得　Uncontrolled Components
    const text = event.currentTarget.text.value;
    //
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
    // テキストをリセット
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
