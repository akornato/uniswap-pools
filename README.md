# Uniswap Pools

This dapp hits [Uniswap V3 Subgraph](https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3) to display pools and transactions details.

Deploy: https://uniswap-pools.vercel.app/

## Apollo

Apollo codegen provides static typing for the results of [Apollo Client](https://www.apollographql.com/docs/react) queries that hit The Graph.

## Next.js

[Next.js](https://nextjs.org/) uses `getDataFromTree` to take React tree and fetch all required Apollo queries) on SSR and then rehydrates the Apollo cache on the client.

## Styling

[Tailwind](https://tailwindcss.com/) is used for layout, and [Ant Design](https://ant.design/) for UI components.

## Local dev

1. `yarn`
2. `yarn run dev`
