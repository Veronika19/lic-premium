import { INTEGER, STRING } from 'sequelize';
import sequelize from '../util/database.js';

const Customer = sequelize.define('customer', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
});

export default Customer;
