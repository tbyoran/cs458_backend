
import { Strategy, ExtractJwt } from 'passport-jwt';
import { db } from '../clients';
import constants from '../constants';
import config from '../../config';

const params = {
  secretOrKey: config.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const strategy = new Strategy(params, async (payload, done) => {
  const user = await db.User.findByPk(payload.uuid, {
    attributes: ['uuid'],
  });

  if (!user) {
    return done(constants.ERRORS.UNAUTH, false);
  }

  return done(null, {
    user
  });
});

export default strategy;