import {
  GetDishesQuery,
  GetDishesQueryVariables,
} from "@/graphql/generated/graphql-query-types";
import { getDishQuery } from "@/graphql/queries/get-dish";
import { fetchGraphQL } from "@/lib/fecth-graphql";

export default async function Home() {
  const result = await fetchGraphQL<GetDishesQuery, GetDishesQueryVariables>(
    getDishQuery,
    { preview: true }
  );
  console.log("result", result);
  return (
    <div className="mx-auto mt-8 flex max-w-lg flex-col gap-6 text-center">
      <h2 className="text-5xl">Welcome to Next.js Starter</h2>
      <p className="text-2xl">A simple Starter for Next.js</p>
    </div>
  );
}
