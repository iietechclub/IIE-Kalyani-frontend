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
    .query<T>({ ...options, fetchPolicy: "no-cache" })
    .then((res) => res.data ?? null)
    // biome-ignore lint/complexity/noCommaOperator: not needed
    .catch((e) => (env.NODE_ENV === "development" && console.error(e), null));
}
