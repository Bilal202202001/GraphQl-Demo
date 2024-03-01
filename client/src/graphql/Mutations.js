import { gql } from "@apollo/client";

export const ADD_GAME = gql`
    
mutation addgame($gameInput : GameInput){
    addGame(gameInput : $gameInput) {
      title,
      platform,
    }
  }
    
`
export const ADD_REVIEW = gql`  
mutation addReview($reviewInput : ReviewInput){
  addReview(reviewInput : $reviewInput) {
    content
  } 
}
`
export const REGISTER_AUTHOR = gql`
mutation addAuthor($authorInput : AuthorInput){
  addAuthor(authorInput : $authorInput) {
    name,
    verified
  } 
} 
`
export const LOGIN_AUTHOR = gql`
mutation loginUser($loginInput : LoginInput){
  loginUser (loginInput : $loginInput){
    _id,
    name,
  }
}
`