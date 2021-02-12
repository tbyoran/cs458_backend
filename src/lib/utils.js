import jwt from 'jsonwebtoken';

import config from '../config';

export const generateJwtToken = (uuid) => jwt.sign({ uuid }, config.JWT_SECRET);