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

export interface GetPoolDetails_pool {
  __typename: "Pool";
  id: string;
  token0: GetPoolDetails_pool_token0;
  token1: GetPoolDetails_pool_token1;
  totalValueLockedUSD: any;
}

export interface GetPoolDetails {
  pool: GetPoolDetails_pool | null;
}

export interface GetPoolDetailsVariables {
  id?: string | null;
}
