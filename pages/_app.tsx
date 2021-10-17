import { useState } from "react";
import Head from "next/head";
import { NextRouter } from "next/router";
import App, { AppProps, AppContext } from "next/app";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import "antd/dist/antd.css";
import { RouterProvider } from "@hooks/useRouter";

const uri = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

const Providers: React.FC<{
  router: NextRouter;
  apolloClient: ApolloClient<NormalizedCacheObject>;
}> = ({ children, router, apolloClient }) => (
  <RouterProvider router={router}>
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  </RouterProvider>
);

const AppWithApollo = ({
  Component,
  router,
  pageProps,
  apolloState,
}: AppProps & { apolloState: any }) => {
  const [apolloClient] = useState(
    new ApolloClient({ uri, cache: new InMemoryCache().restore(apolloState) })
  );
  return (
    <>
      <Head>
        <title>Uniswap Pools</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Providers router={router} apolloClient={apolloClient}>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

AppWithApollo.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (!process.browser) {
    const { pageProps } = appProps;
    const { Component, router } = appContext;
    const apolloClient = new ApolloClient({ uri, cache: new InMemoryCache() });
    await getDataFromTree(
      <Providers router={router} apolloClient={apolloClient}>
        <Component {...pageProps} />
      </Providers>
    );
    const apolloState = apolloClient.cache.extract();
    return { ...appProps, apolloState };
  }

  return appProps;
};

export default AppWithApollo;
