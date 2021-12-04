'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 'a771dfa9-24de-4b46-afc7-370772f06001',
        name: 'working',
      },
      {
        id: 'a771dfa9-24de-4b46-afc7-370772f06002',
        name: 'shopping',
      },
      {
        id: 'a771dfa9-24de-4b46-afc7-370772f06003',
        name: 'training',
      },
      {
        id: 'a771dfa9-24de-4b46-afc7-370772f06004',
        name: 'traveling',
      },
      {
        id: 'a771dfa9-24de-4b46-afc7-370772f06005',
        name: 'study',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
