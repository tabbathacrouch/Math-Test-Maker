const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = { resolvers };
