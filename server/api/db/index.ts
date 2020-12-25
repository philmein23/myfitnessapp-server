import pgPromise from 'pg-promise';

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env;
const connectionString = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

const pgp = pgPromise({});
const db = pgp(connectionString);

export default db;
