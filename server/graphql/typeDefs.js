const { gql } = require('apollo-server');


module.exports = gql`
type Game {
    title : String!
    platform: [String]!
    reviews: [Review!]
}
type Author {
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Review {
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
type Query {
    game(id: ID!): Game
    games: [Game]
    author(id: ID!): Author
    authors: [Author]
    review(id: ID!): Review
    reviews: [Review]
}
input GameInput {
    title: String!,
    platform: [String]!
}
input AuthorInput {
  name: String!,
  verified: Boolean!
}
input ReviewInput {
    rating: Int!
    content: String!
    author: ID!
    game: ID!
  }

type Mutation {
    addGame(gameInput: GameInput) : Game
    addAuthor(authorInput: AuthorInput) : Author
    addReview(reviewInput: ReviewInput) : Review
}

`
