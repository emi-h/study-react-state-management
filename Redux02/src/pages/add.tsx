import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "src/state/Todos";

const Add: NextPage = () => {
  const dispatch = useDispatch();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;

    // setTodos((prevTodos) => {
    //   const newTodo = { id: prevTodos.length + 1, text, isDone: false };
    //   return [...prevTodos, newTodo];
    // });
    dispatch(addTodo(text));

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