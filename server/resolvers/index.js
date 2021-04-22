const queryResolver = require("./queries");
const mutationResolver = require("./mutations");

const resolvers = {
  Query: queryResolver,
  Mutation: mutationResolver,
};

module.exports = resolvers;
