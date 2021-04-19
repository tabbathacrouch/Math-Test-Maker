const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { resolvers } = require("./resolvers/test");
const path = require("path");

(async function startApolloServer() {
  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `;

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../build")));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "../build", "index.html"));
    });
  }

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})();
