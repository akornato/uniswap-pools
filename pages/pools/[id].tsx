import type { NextPage } from "next";
import { useRouter } from "../../hooks/useRouter";
import { useQuery } from "@apollo/client";
import { GET_POOL_DETAILS } from "../../queries/get-pool-details";
import type {
  GetPoolDetails,
  GetPoolDetailsVariables,
} from "../../gql/GetPoolDetails";

const PoolDetailsPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { loading, data } = useQuery<GetPoolDetails, GetPoolDetailsVariables>(
    GET_POOL_DETAILS,
    { variables: { id: id?.toString() } }
  );
  return <div>{data?.pool?.id}</div>;
};

export default PoolDetailsPage;
