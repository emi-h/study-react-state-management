import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { TodosProvider } from "src/state/Todo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosProvider>
  );
}

export default MyApp;
