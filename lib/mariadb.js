const Knex = require('knex');
const config = require('config');

let conn;
conn = connect();

function connect () {
    const dbConfig = config.get('Database.dbConfig');
    const knex = Knex({
        client: 'mysql',
        connection: dbConfig
    });
    return knex;
}

module.exports = conn;
