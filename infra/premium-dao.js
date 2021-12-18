import db from '../models/index.js';

export const addPremium = async (premiumData) => {
  try {
    const findAll = await db.Premium.create(premiumData);
    return findAll;
  } catch (err) {
    return err.message;
  }
};

export const findAllPremium = async () => {
  try {
    const findAll = await db.Premium.findAll();
    return findAll;
  } catch (err) {
    return err.message;
  }
};

export default {
  addPremium,
  findAllPremium,
};
