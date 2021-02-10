import validator from 'validator';
import { Op } from 'sequelize';

import { db } from '../lib/clients';
import constants from '../lib/constants';

const GetUserByUuid = ({ uuid }) => new Promise(async (resolve, reject) => {
  if (!uuid) {
    return reject(constants.ERRORS.MISSING_ARGS);
  }

  const user = await db.User.findByPk(uuid);
  return resolve(user);
});

export default {
  GetUserByUuid,
};