import type { NextPage } from "next";
import Link from "next/link";
import { Table, Spin } from "antd";
import { useRouter } from "@hooks/useRouter";
import { useQuery } from "@apollo/client";
import { GET_POOL_DETAILS } from "@queries/get-pool-details";
import type {
  GetPoolDetails,
  GetPoolDetailsVariables,
} from "@gql/GetPoolDetails";

const PoolDetailsPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { loading, data } = useQuery<GetPoolDetails, GetPoolDetailsVariables>(
    GET_POOL_DETAILS,
    { variables: { id: id?.toString() } }
  );

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  const { token0, token1, totalValueLockedUSD, txCount, swaps, mints, burns } =
    data?.pool || {};

  const swapTransactions =
    swaps?.map(({ id, timestamp, amountUSD }) => ({
      key: id,
      txType: "swap",
      timestamp,
      amountUSD,
    })) || [];
  const mintTransactions =
    mints?.map(({ id, timestamp, amountUSD }) => ({
      key: id,
      txType: "mint",
      timestamp,
      amountUSD,
    })) || [];
  const burnTransactions =
    burns?.map(({ id, timestamp, amountUSD }) => ({
      key: id,
      txType: "burn",
      timestamp,
      amountUSD,
    })) || [];
  const transactions = [
    ...swapTransactions,
    ...mintTransactions,
    ...burnTransactions,
  ];

  return (
    <div className="p-5">
      <div>
        <Link href="/pools">&lt; Back to Pools</Link>
      </div>
      <div className="pt-3 text-3xl">{`${token0?.symbol}/${token1?.symbol}`}</div>
      <div className="pt-3">
        Total Value Locked (USD): {totalValueLockedUSD}
      </div>
      <div className="pt-3">Tx Count: {txCount}</div>
      <Table
        className="pt-3"
        pagination={{ defaultPageSize: 10 }}
        loading={loading}
        dataSource={transactions.map(
          ({ key, txType, amountUSD, timestamp }) => ({
            key,
            link: (
              <a
                href={`https://etherscan.io/tx/${key}`}
                target="_blank"
              >{`https://etherscan.io/tx/${key}`}</a>
            ),
            txType,
            amountUSD,
            timestamp,
          })
        )}
      >
        <Table.Column title="Link to Etherscan" dataIndex="link" />
        <Table.Column title="Tx Type" dataIndex="txType" />
        <Table.Column title="Token Amount (USD)" dataIndex="amountUSD" />
        <Table.Column title="Timestamp" dataIndex="timestamp" />
      </Table>
    </div>
  );
};

export default PoolDetailsPage;
