const { ApolloError } = require('apollo-server-errors');
const Game = require('../../models/Games')
const Review = require('../../models/Reviews')

// Mutation
const addGame = async (_, { gameInput: { title, price, developer, version, platform } }) => {
    const newGame = new Game({
        title: title,
        price: price,
        developer: developer,
        version: version,
        platform: platform,
    });
    const res = await newGame.save();
    return {
        id: res._id,
        ...res._doc,
    };
};

//Query


const getAllGames = async (_, __, { req, res }) => {
    try {
        const games = await Game.find();
        return games;
    } catch (error) {
        throw new ApolloError('Failed to fetch games', 'DATABASE_ERROR');
    }
};


const Query = {
    game: async (_, { id }) => await Game.findById(id),
    games: getAllGames,
}
const Mutation = {
    addGame,
};

module.exports = {
    Mutation,
    Query,
    Game: {
        reviews: async (parent) => {
            try {
                const reviews = await Review.find({ game: parent.id });
                return reviews;
            } catch (error) {
                throw new ApolloError('Failed to fetch reviews for the game', 'DATABASE_ERROR');
            }
        },
    }
};

