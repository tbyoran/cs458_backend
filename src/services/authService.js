import md5 from 'md5';
import validator from 'validator';
import { Op } from 'sequelize';
import { v4 as _uuid } from 'uuid';

import { db } from '../lib/clients';
import constants from '../lib/constants';
import { generateJwtToken } from '../lib/utils';

const Login = ({ email, phoneNumber, password }) => new Promise(async (resolve, reject) => {
  if ((!email && !phoneNumber) || !password) {
    return reject(constants.ERRORS.MISSING_ARGS);
  }

  if (email && !validator.isEmail(email)) {
    return reject(constants.ERRORS.INVALID_ARGS);
  }

  phoneNumber = phoneNumber && phoneNumber.split(" ").join("") || null;

  if (phoneNumber && !validator.isMobilePhone(phoneNumber, "tr-TR")) {
    return reject(constants.ERRORS.INVALID_ARGS);
  }

  const user = await db.User.findOne({
    where: {
      [email ? 'email' : 'phoneNumber']: email || phoneNumber,
      password: md5(password),
    },
  });

  if (!user) {
    return reject(constants.ERRORS.ENTITY_NOT_EXIST);
  }

  const token = generateJwtToken(user.uuid);

  return resolve({ token });
});

const Register = ({
  email,
  password,
}) => new Promise(async (resolve, reject) => {
  if (!email || !password) {
    return reject(constants.ERRORS.MISSING_ARGS);
  }

  if (!validator.isEmail(email)) {
    return reject(constants.ERRORS.INVALID_ARGS);
  }

  const isExist = await db.User.findOne({
    where: {
      email
    },
  });

  if (isExist) {
    return reject(constants.ERRORS.DUPLICATED_ARGS);
  }

  const user = await db.User.create({
    uuid: _uuid(),
    email,
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