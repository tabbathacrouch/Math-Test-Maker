const jwt = require('jsonwebtoken');

const { books, mockUsers } = require('../data/userData');


module.exports = {
  // TODO: delete me as soon as we have a real query
  books: () => books,
  user: (_, { id }) => {
    return mockUsers.find(user => user.id === id);
  },
  viewer(parent, args, { user }) {
    return mockUsers.find(({ id }) => id === user.sub);
  }
};
