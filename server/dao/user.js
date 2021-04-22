const db = require("../db");

class UserDAO {
  async createUser({ fullName, email, password }) {
    await db("users")
      .insert({
        full_name: fullName,
        email,
        password,
      })
    return true;
  }
}

module.exports = new UserDAO();
