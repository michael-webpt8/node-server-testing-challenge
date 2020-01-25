const db = require('../data/config');

module.exports = {
    list,
    findBy,
    findById,
    insert,
    update
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

async function insert(data) {
    const [id] = await db('characters').insert(data);

    return findById(id);
}

async function update(id, data) {
    await db('characters').where({ id }).update(data);

    return findById(id);
}