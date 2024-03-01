import { gql } from "@apollo/client";

export const LOAD_GAMES = gql`
query ExampleQuery{
    games {
        title
        price
        developer
        version
        platform
      }
  }
`

export const LOAD_HALF = gql`
query ExampleQuery{
    games {
        title
        price
        version
      }
  }
`

export const LOAD_PRODUCTS = gql`
query ExampleQuery{
  games {
    _id
    title
    price
    developer
    version
    platform
    reviews {
      content,
      rating,
      author {
        name,
      }
    }
  }
}

`