import express from 'express';

import { UserService } from '../services';

const router = express.Router();

router.get('/me', async (req, res /* next */) => {
  const { user } = req;

  try {
    const result = await UserService.GetUserByUuid(user);
    return res.send(result);
  } catch (err) {
    return res.status(err && err.code || 500).send(err);
  }
});

export default router;