import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { GET_POOLS } from "@queries/get-pools";
import type { GetPools } from "@gql/GetPools";

export const Pools = () => {
  const { loading, data } = useQuery<GetPools>(GET_POOLS);
  return (
    <div className="px-5">
      <div className="pt-3 text-3xl">Uniswap Pools</div>
      <Table
        className="pt-3"
        pagination={{ defaultPageSize: 10 }}
        loading={loading}
        dataSource={data?.pools.map(
          ({
            id,
            txCount,
            totalValueLockedUSD,
            volumeUSD,
            token0,
            token1,
          }) => ({
            key: id,
            pool: (
              <Link href={`/pools/${id}`}>
                {`${token0.symbol}/${token1.symbol}`}
              </Link>
            ),
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
    </div>
  );
};
