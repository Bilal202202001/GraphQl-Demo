const gameResolvers = require('./Games')
const authorResolvers = require('./Authors')
const reviewResolvers = require('./Reviews')

module.exports = {
    Query: {
        ...gameResolvers.Query,
        ...authorResolvers.Query,
        ...reviewResolvers.Query    
    },

    Mutation: {
        ...gameResolvers.Mutation,
        ...authorResolvers.Mutation,
        ...reviewResolvers.Mutation
    },
    Game:{
        ...gameResolvers.Game
    },
    Review:{
        ...reviewResolvers.Review
    }
};


// Game: {
    //     reviews: async (parent) => {
    //         try {
    //             const reviews = await Review.find({ game: parent.id });
    //             return reviews;
    //         }
    //         catch (error) {
    //             throw new ApolloError('Failed to fetch reviews for the game', 'DATABASE_ERROR');
    //         }
    //     },