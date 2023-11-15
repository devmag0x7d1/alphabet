const Pool = require("pg").Pool

const pool = new Pool({
  host: "localhost",
  user: "alphabet",
  password: "pa55word",
  database: "alphabet",
  port: 5432
})

module.exports = pool
