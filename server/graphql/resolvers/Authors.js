const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Author = require('../../models/Author')

// Mutation
const addAuthor = async (_, { authorInput: { name,verified,email,password } }) => {
    const oldAuthor = await Author.findOne({ email });

    if (oldAuthor) {
        throw new ApolloError('User Exists ' + email, 'USER_EXISTS');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newAuthor = new Author({
        name: name,
        email: email.toLowerCase(),
        verified: verified,
        password: encryptedPassword,
    });

    const jwtToken = jwt.sign({
        author_id: newAuthor._id, email: newAuthor.email
    }, "UNSAFE_STRING", { expiresIn: "1h" });

    newAuthor.token = jwtToken;

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

const loginUser = async (_, { loginInput : { email, password }}) => {
    const user = await Author.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const jwtToken = jwt.sign({
            user_id: user._id, email: user.email
        }, "UNSAFE_STRING", { expiresIn: "10h" });
        user.token = jwtToken;
        return {
            id: user._id,
            ...user._doc
        };
    } else {
        throw new ApolloError('Incorrect Password', 'INCORRECT_PASSWORD');
    }
};

const Query = {
    author: async (_, { id }) => await Author.findById(id),
    authors: getAllAuthor,
};
const Mutation = {
    addAuthor,
    loginUser
};

module.exports = {
        Mutation,
        Query
    };

