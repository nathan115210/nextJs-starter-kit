import * as Types from './contentful-graphql-types';

export type GetDishesQueryVariables = Types.Exact<{
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type GetDishesQuery = { __typename?: 'Query', dishCollection?: { __typename?: 'DishCollection', items: Array<{ __typename?: 'Dish', name?: string | null, desc?: string | null, description?: { __typename?: 'DishDescription', json: any } | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };
