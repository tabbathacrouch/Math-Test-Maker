const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./resolvers/test');
// Suh dude

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log('server started at: ', url);
});
