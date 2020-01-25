
exports.up = async function (knex) {
    await knex.schema.createTable('characters', tbl => {
        tbl.increments('id');
        tbl.string('name', 100).unique().notNullable()
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTablesIfExist('characters');
};
