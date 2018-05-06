const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users').insert({
//      name: 'Rodrigo',
//      email: 'rodrigo@teste.com.br',
//      password: 'rodrigo'
// }).then(data => console.log(data))

// knex('users').where({id:3}).then(resultado => console.log(resultado))