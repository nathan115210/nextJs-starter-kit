import { type DocumentNode, print } from "graphql";

//TODO: add one more param to toggle the space ID
export async function fetchGraphQL<T, VARIABLES = undefined>(
  query: DocumentNode,
  variables?: VARIABLES,
  preview = true
): Promise<T> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query: print(query), variables }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      /*next: { tags: ["articles"] },*/
    }
  ).then((response) => response.json());
}
