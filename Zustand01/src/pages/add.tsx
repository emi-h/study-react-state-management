import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useTodosDispatch } from "src/state/Todo";

const Add: NextPage = () => {
  console.log("add comp");
  const { addTodo } = useTodosDispatch();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    // フォームのデフォルトの挙動はOFF
    event.preventDefault();
    // テキスト取得　Uncontrolled Components
    const text = event.currentTarget.text.value;
    //
    addTodo(text);
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
