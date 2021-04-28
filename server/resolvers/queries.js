const { books, mockUsers } = require('../data/userData')

module.exports = {
  // TODO: delete me as soon as we have a real query
  books: () => books,
  user: (_, { id }) => {
    return mockUsers.find(user => user.id === id);
  }
};
