import dotenv from 'dotenv';
import fs from 'fs-extra';
import { Client } from 'pg';

const init = async () => {
  dotenv.config();

  const client = new Client();

  try {
    await client.connect();

    const sql = await fs.readFile('./server/tools/initdb.pgsql', {
      encoding: 'UTF-8',
    });

    // split the file into separate statements;
    const statements = sql.split(/;\s*$/m);

    for (const statement of statements) {
      if (statement.length > 3) {
        await client.query(statement);
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await client.end();
  }
};

init()
  .then(() => {
    console.log('finished');
  })
  .catch((err) => {
    console.log(err);
  });
