//var knexfile= require('knexfile.js');
//var knexConfig = knexfile[process.env.NODE_ENV || 'development'];

// initialize knex with the configuration for the environment
//var knex = require('knex')(knexConfig);
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'slidebible'
  },
  migrations: {
    tableName: 'migrations'
  }
});
// export the initialized knex object
module.exports = knex;