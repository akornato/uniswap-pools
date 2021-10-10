/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPoolDetails
// ====================================================

export interface GetPoolDetails_pool_token0 {
  __typename: "Token";
  symbol: string;
}

export interface GetPoolDetails_pool_token1 {
  __typename: "Token";
  symbol: string;
}

export interface GetPoolDetails_pool_swaps {
  __typename: "Swap";
  id: string;
  amountUSD: any;
  timestamp: any;
}

export interface GetPoolDetails_pool_burns {
  __typename: "Burn";
  id: string;
  amountUSD: any | null;
  timestamp: any;
}

export interface GetPoolDetails_pool_mints {
  __typename: "Mint";
  id: string;
  amountUSD: any | null;
  timestamp: any;
}

export interface GetPoolDetails_pool {
  __typename: "Pool";
  token0: GetPoolDetails_pool_token0;
  token1: GetPoolDetails_pool_token1;
  totalValueLockedUSD: any;
  txCount: any;
  swaps: GetPoolDetails_pool_swaps[];
  burns: GetPoolDetails_pool_burns[];
  mints: GetPoolDetails_pool_mints[];
}

export interface GetPoolDetails {
  pool: GetPoolDetails_pool | null;
}

export interface GetPoolDetailsVariables {
  id?: string | null;
}
