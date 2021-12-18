import { connection, SequelizeDb as Sequelize } from '../config/index.js';

// const { Sequelize, connection } = db;

let premiumSch = connection.define(
  'lic_premium',
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date_of_commence: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    table_term: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
    pay_mode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    premium_amt: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: 'lic_premiums',
  }
);

export default premiumSch;
