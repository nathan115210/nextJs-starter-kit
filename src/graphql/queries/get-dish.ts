import gql from "graphql-tag";

export const getDishQuery = gql`
  query getDishes($preview: Boolean = false) {
    dishCollection(preview: $preview) {
      items {
        name
        description {
          json
        }
        image {
          url
        }
        desc
      }
    }
  }
`;
