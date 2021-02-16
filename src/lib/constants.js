export default {
  ERRORS: {
    DUPLICATED_ARGS: {
      code: 400,
      msg: 'User already exists'
    },
    ENTITY_NOT_EXIST: {
      code: 400,
      msg: 'User does not exist (Check your arguments)',
    },
    INVALID_ARGS: {
      code: 400,
      msg: 'Invalid arguments format (Arguments cannot pass the validator)'
    },
    INVALID_TOKEN: {
      code: 401,
      msg: 'Invalid token'
    },
    MISSING_ARGS: {
      code: 400,
      msg: 'Arguments are missing'
    },
    UNAUTH: {
      code: 401,
      msg: 'Unauthorized action',
    },
    UNKNOWN: {
      code: 500,
      msg: 'Unknown error',
    },
  }
};