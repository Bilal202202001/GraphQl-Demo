const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const cors = require('cors'); 
const MONGODB = "mongodb://127.0.0.1:27017/graphql-demo";
const { extractTokenFromCookie, getUserNameFromToken } = require('./cookieUtils');

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://studio.apollographql.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Add the desired methods here
}));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res })
});

app.get('/user', (req, res) => {
    const token = extractTokenFromCookie(req.headers.cookie);
    const sessionAuthor = getUserNameFromToken(token)
    if (sessionAuthor) {
        res.status(200).json({ sessionAuthor });
    } else {
        res.status(401).json({ message: 'User ID not found in cookies' });
    }
});


async function startApolloServer() {
    await server.start();

    server.applyMiddleware({ app, cors: false });

    mongoose.connect(MONGODB, { useNewUrlParser: true })
        .then(() => {
            console.log("MongoDB Connected");
            app.listen({ port: 5000 }, () => {
                console.log(`Server running at http://localhost:5000${server.graphqlPath}`);
            });
        })
        .catch(err => {
            console.error('Failed to connect to MongoDB', err);
        });


}

startApolloServer();

