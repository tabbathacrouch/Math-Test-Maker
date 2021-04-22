const user = require("../dao/user");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (_, args) => {
    const { fullName, email } = args;
    const password = await bcrypt.hash(args.password, 10);
    const success = await user.createUser({ fullName, email, password });
    // Successful if no errors
    return { success };
  },
};
