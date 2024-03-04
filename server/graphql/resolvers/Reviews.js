const { ApolloError } = require('apollo-server-errors');
const Review = require('../../models/Reviews')
const Author = require('../../models/Author')
const jwt = require('jsonwebtoken');
const { extractTokenFromCookie, getUserIdFromToken } = require('../../cookieUtils');

// Mutation
const addReview = async (_, { reviewInput: { rating, content, game } },{req,res}) => {
    const token = extractTokenFromCookie(req.headers.cookie);
    const sessionAuthor = getUserIdFromToken(token)
    const newReview = new Review({
        rating: parseInt(rating),
        content: content,
        author: sessionAuthor,
        game: game,
    });
    const result = await newReview.save();
    return {
        id: result._id,
        ...result._doc,
    };
};

//Query
const getAllReview = async () => {
    try {
        const review = await Review.find();
        return review;
    } catch (error) {
        throw new ApolloError('Failed to fetch review', 'DATABASE_ERROR');
    }
};


const Query = {
    review: async (_, { id }) => await Review.findById(id),
    reviews: getAllReview,
};
const Mutation = {
    addReview,
};
module.exports = {
    Mutation,
    Query,
    Review: {
        author: async (parent) => {
            try {
                const author = await Author.findOne({ _id: parent.author });
                return author;
            } catch (error) {
                throw new ApolloError('Failed to fetch reviews for the Author', 'DATABASE_ERROR');
            }
        },
    },
};
