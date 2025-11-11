import type { OperationVariables } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { env } from "@/lib/env";

export { gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: env.BACKEND_GRAPHQL_URL, fetch }),
  cache: new InMemoryCache(),
});

export async function graphqlQuery<T>(
  options: ApolloClient.QueryOptions<T, OperationVariables>,
): Promise<T | null> {
  return await client
    .query<T>(options)
    .then((res) => res.data ?? null)
    .catch(() => null);
}
