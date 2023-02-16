const knex = require('knex')(
  require('../../knexfile.js')[process.env.NODE_ENV || 'development']
)

const getAllUserInfo = () => {
  return knex('user_info')
}

module.exports = { getAllUserInfo }
