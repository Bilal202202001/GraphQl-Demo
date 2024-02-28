const { ApolloError } = require('apollo-server-errors');
const Author = require('../../models/Author')

// Mutation
const addAuthor = async (_, { authorInput: { name, verified } }) => {
    const newAuthor = new Author({
        name: name,
        verified: verified,
    });
    const res = await newAuthor.save();
    return {
        id: res._id,
        ...res._doc,
    };
};



//Query
const getAllAuthor = async () => {
    try {
        const author = await Author.find();
        return author;
    } catch (error) {
        throw new ApolloError('Failed to fetch author', 'DATABASE_ERROR');
    }
};


const Query = {
    author: async (_, { id }) => await Author.findById(id),
    authors: getAllAuthor,
};
const Mutation = {
    addAuthor,
};

module.exports = {
        Mutation,
        Query
    };

