import passport from 'passport';
import constants from '../constants';

const UNPROTECTED_ROUTES = [
  '/',
  '/auth/login',
  '/auth/signup',
];

export default (req, res, next) => passport.authenticate('jwt', { session: false }, (err, payload /* info */) => {
  if (UNPROTECTED_ROUTES.includes(req.path)) {
    next();
    return;
  }

  if (err || !payload) {
    const e = err || constants.ERRORS.UNAUTH;
    res.status(e.code).send(e);
    return;
  }

  const { user } = payload;
  req.user = user && user.dataValues;
  next();
})(req, res, next);