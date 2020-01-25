const db = require('../data/config');

module.exports = {
    list,
    findBy,
    findById
}

function list() {
    return db('characters').select()
}

function findBy(filter) {
    return db('characters').where(filter);
}

function findById(id) {
    return db('characters')
        .where({ id })
        .select()
        .first();
}