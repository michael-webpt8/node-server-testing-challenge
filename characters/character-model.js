const db = require('../data/config');

module.exports = {
    list,
    findBy
}

function list() {
    return db('characters').select()
}

function findBy(filter) {
    return db('characters').where(filter);
}