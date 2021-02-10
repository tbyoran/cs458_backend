import md5 from 'md5';
import validator from 'validator';
import { Op } from 'sequelize';
import { v4 as _uuid } from 'uuid';

import { db } from '../lib/clients';
import constants from '../lib/constants';
import { generateJwtToken } from '../lib/utils';

const Login = ({ username, password }) => new Promise(async (resolve, reject) => {
  if (!username || !password) {
    return reject(constants.ERRORS.MISSING_ARGS);
  }

  const user = await db.User.findOne({
    where: {
      username,
      password: md5(password),
    },
  });

  if (!user) {
    return reject(constants.ERRORS.INVALID_ARGS);
  }

  const token = generateJwtToken(user.uuid);

  return resolve({ token });
});

const Register = ({
  name,
  surname,
  email,
  username,
  password,
}) => new Promise(async (resolve, reject) => {
  if (!name || !surname || !email || !username || !password) {
    return reject(constants.ERRORS.MISSING_ARGS);
  }

  if (!validator.isEmail(email)) {
    return reject(constants.ERRORS.INVALID_ARGS);
  }

  const isExist = await db.User.findOne({
    where: {
      [Op.or]: [
        { username },
        { email },
      ],
    },
  });

  if (isExist) {
    return reject(constants.ERRORS.DUPLICATED_ARGS);
  }

  const user = await db.User.create({
    uuid: _uuid(),
    name,
    surname,
    email,
    username,
    password: md5(password),
  });

  if (!user) {
    return reject(constants.ERRORS.UNKNOWN);
  }

  return resolve();
});

export default {
  Login,
  Register,
};