import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { GET_POOLS } from "../queries/get-pools";
import type { GetPools } from "../gql/GetPools";

export const Pools = () => {
  const { loading, data } = useQuery<GetPools>(GET_POOLS);
  return (
    <Table
      pagination={{ defaultPageSize: 10 }}
      loading={loading}
      dataSource={data?.pools.map(
        ({ id, txCount, totalValueLockedUSD, volumeUSD, token0, token1 }) => ({
          key: id,
          pool: `${token0.symbol}/${token1.symbol}`,
          txCount,
          totalValueLockedUSD,
          volumeUSD,
        })
      )}
    >
      <Table.Column title="Pool" dataIndex="pool" />
      <Table.Column title="TX Count" dataIndex="txCount" />
      <Table.Column title="TVL (USD)" dataIndex="totalValueLockedUSD" />
      <Table.Column title="Volume (USD)" dataIndex="volumeUSD" />
    </Table>
  );
};
