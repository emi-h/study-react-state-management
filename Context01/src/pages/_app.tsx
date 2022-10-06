import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// export忘れず
export const ThemeContext = createContext("light");
export const LangContext = createContext("ja");

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ja");

  return (
    // valueに入れた値がuseContextで読み取られる値となる
    // →useStateなどを使用して、valueを動的に変更する
    // →Providerは複数使用可能で、コンポーネントに近いものが適用される
    <ThemeContext.Provider value={theme}>
      <ThemeContext.Provider value={lang}>
        <Layout todoCount={todos.length}>
          <button
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
              setLang((prev) => (prev === "ja" ? "en" : "ja"));
            }}
          >
            テーマ・言語切り替え
          </button>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
