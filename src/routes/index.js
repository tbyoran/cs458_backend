import express from 'express';

import config from '../config';
import { db } from '../lib/clients';

import authRouter from './auth';
import userRouter from './user';

const router = express.Router();

router.get('/', async (req, res /* next */) => {
  const data = {
    database: null,
    env: config.env,
    status: true,
  };

  try {
    await db.sequelize.authenticate();
    data.database = true;
  } catch {
    data.database = false;
  }

  res.send(data);
});

export const initializeRoutes = (app) => {
  app.use('/', router);
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
};

export const initializeErrorHandlers = (app) => {
  // catch 404 and forward to error handler
  app.use((req, res /* next */) => res.status(404).send('Not found!'));

  // error handler
  app.use((err, req, res /* next */) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
};