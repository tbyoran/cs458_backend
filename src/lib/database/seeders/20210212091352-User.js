const md5 = require('md5');
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Users', [{
    uuid: 'fa54dc72-03b3-4db6-8baf-51a469491707',
    email: 'john.doe@dummy.com',
    phoneNumber: '5005555555',
    password: md5('dummy'),
    accountPlan: 2,
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
  }], {}),
  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Users', null, {})
};
