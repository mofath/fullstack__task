const sequelizeConfig = {
  development: {
    username: 'root',
    password: '',
    database: 'credit_go',
    params: {
      host: '127.0.0.1',
      dialect: 'mysql',
      logging: false,
      operatorsAliases: false,
    },
  },
  test: {
    username: 'root',
    password: '',
    database: 'credit_go',
    params: {
      host: '127.0.0.1',
      dialect: 'mysql',
      logging: false,
      operatorsAliases: false,
    },
  },
  production: {
    username: 'root',
    password: '',
    database: 'credit_go',
    params: {
      host: '127.0.0.1',
      dialect: 'mysql',
      logging: false,
      operatorsAliases: false,
    },
  },
};

export default sequelizeConfig[process.env.NODE_ENV];
