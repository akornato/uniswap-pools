import { gql } from "@apollo/client";

export const GET_POOL_DETAILS = gql`
  query GetPoolDetails($id: String) {
    pool(id: $id) {
      id
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      totalValueLockedUSD
    }
  }
`;
