/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPools
// ====================================================

export interface GetPools_pools_token0 {
  __typename: "Token";
  symbol: string;
}

export interface GetPools_pools_token1 {
  __typename: "Token";
  symbol: string;
}

export interface GetPools_pools {
  __typename: "Pool";
  id: string;
  txCount: any;
  totalValueLockedUSD: any;
  volumeUSD: any;
  token0: GetPools_pools_token0;
  token1: GetPools_pools_token1;
}

export interface GetPools {
  pools: GetPools_pools[];
}
