import { Children, FC, ReactNode } from "react";
import Header from "src/components/Header";

type Props = {
  children: ReactNode;
  todoCount: number;
};

export const Layout: FC<Props> = ({ children, todoCount }) => {
  return (
    <>
      <Header todoCount={todoCount} />
      <main>{children}</main>
    </>
  );
};
