const { gql } = require('apollo-server');


module.exports = gql`
type Game {
    _id: ID!
    title : String!
    price: String!
    developer: String!
    version: String!
    platform: [String]!
    reviews: [Review!]
}
type Author {
    _id: ID!
    name: String!
    verified: String!
    email: String!
    password: String!
    token: String!
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
    price: String!,
    developer: String!,
    version: String!,
    platform: [String]!
}
input AuthorInput {
  name: String!,
  verified: String!
  email: String!
  password: String!
}
input ReviewInput {
    rating: Int!
    content: String!
    author: ID!
    game: ID!
  }
input LoginInput {
    email: String!
    password: String!
}

type Mutation {
    addGame(gameInput: GameInput) : Game
    addAuthor(authorInput: AuthorInput) : Author
    loginUser(loginInput: LoginInput): Author!
    addReview(reviewInput: ReviewInput) : Review
}

`
