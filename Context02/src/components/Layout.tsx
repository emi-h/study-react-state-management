import { FC, ReactNode } from "react";
import Header from "src/components/Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  console.log("layout comp");
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
