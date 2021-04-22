const knex = require("knex");
const knexFile = require("./knexfile");

const db = knex(process.env.NODE_ENV === 'production' ? knexFile.production : knexFile.development);

module.exports = db;
