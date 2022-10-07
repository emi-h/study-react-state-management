import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";
import { Layout } from "src/components/Layout";
import { store } from "src/state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
