import Sequelize from 'sequelize';
import keys from './keys.js';

let db = {};

export const connection = new Sequelize(keys.database, keys.username, keys.password, {
  port: '3306',
  host: keys.host,
  dialect: 'mysql',
});

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.log('=======error', err);
}

// db.connection = connection;
export const SequelizeDb = Sequelize;
// db.models = models;

// export default db;
