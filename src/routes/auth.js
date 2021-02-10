import express from 'express';

import { AuthService } from '../services';

const router = express.Router();

router.post('/login', async (req, res /* next */) => {
  const payload = req.body;

  try {
    const result = await AuthService.Login(payload);
    return res.send(result);
  } catch (err) {
    return res.status(err && err.code || 500).send(err);
  }
});

export default router;