const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }

    input saveBook {
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedbooks: [Book]
    }

    input currentUser {
        _id: ID!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(username: String!): User
    }

    type Mutation {
        login(email: String! password: String!): Auth
        saveBook(username: String! book: saveBook!): User
        deleteBook(user: currentUser!, bookId: ID!): [User]
        createUser(username: String! email: String! password: String!): Auth
    }
    `;

module.exports = typeDefs;