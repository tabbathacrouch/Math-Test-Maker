const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const path = require("path");
const { addResolversToSchema } = require("@graphql-tools/schema");
const schema = require("./schema");

(async function startApolloServer() {
  const schemaWithResolvers = addResolversToSchema({
    schema: await schema,
    resolvers,
  });

  const server = new ApolloServer({ schema: schemaWithResolvers });
  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../build")));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "../build", "index.html"));
    });
    console.log("Serving index.html");
  }

  await new Promise((resolve) =>
    app.listen({ port: process.env.PORT || 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})();
