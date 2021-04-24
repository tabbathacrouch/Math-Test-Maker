const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const user = require("../dao/user");

module.exports = {
  createUser: async (_, args) => {
    const { fullName, email } = args;
    const password = await bcrypt.hash(args.password, 10);
    const success = await user.createUser({ fullName, email, password });
    // Successful if no errors
    return { success };
  },
  login: (_, args, { user }) => {
    // add logic for loging a user in here
  }
};
