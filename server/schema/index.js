const { loadSchema } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const path = require("path");

module.exports = (async function() {
  const schema = await loadSchema(path.join(__dirname, "./*.graphql"), {
    loaders: [new GraphQLFileLoader()],
  });
  return schema;
})();
