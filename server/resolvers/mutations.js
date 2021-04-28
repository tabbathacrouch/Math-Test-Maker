const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const user = require("../dao/user");

const { mockUsers } = require('../data/userData');

module.exports = {
  createUser: async (_, args) => {
    const { fullName, email } = args;
    const password = await bcrypt.hash(args.password, 10);
    const success = await user.createUser({ fullName, email, password });
    // Successful if no errors
    return { success };
  },
  login: (_, { email, password }) => {
    const { id, permissions, roles } = mockUsers.find(
      user => user.email === email && user.password === password
    );
    return jwt.sign(
      { 'https://spaceapi.com/graphql': { roles, permissions } },
      'asdlkfjasdfajsdfuw',
      { algorithm: 'HS256', subject: id, expiresIn: '1d' }
    );
  }
};
