import { gql } from "@apollo/client";

export const GET_POOLS = gql`
  query GetPools {
    pools {
      id
      txCount
      totalValueLockedUSD
      volumeUSD
      token0 {
        symbol
      }
      token1 {
        symbol
      }
    }
  }
`;
