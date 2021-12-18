import express from 'express';
const router = express.Router();

import policyValidator from '../validations/premium-add.js';
import { addPremium, findAllPremium } from '../infra/premium-dao.js';

router.post('/add', async (req, res) => {
  console.log(req.body);

  const { errors, isValid } = policyValidator(req.body);
  if (!isValid) {
    return res.status(400).json({ status: false, content: errors });
  }

  try {
    const savedData = await addPremium(req.body);
    console.log('=====savedData', savedData);
    res.status(200).json({ status: true, content: savedData });
  } catch (err) {
    console.log('=========', err);
    res.status(400).send({ status: false, content: err });
  }
});

router.get('/find', async (req, res) => {
  try {
    const savedData = await findAllPremium();
    console.log('=====savedData', savedData);
    res.status(200).json({ status: true, content: savedData });
  } catch (err) {
    console.log('=========', err);
    res.status(400).send({ status: false, content: err });
  }
});

export default router;
