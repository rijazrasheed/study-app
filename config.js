const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'floppy.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'ngeikreb',
    password: env.DB_PASSWORD || 'l08h3xcJ95j72SINheKKgEdRgoyZusHU',
    database: env.DB_NAME || 'ngeikreb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
