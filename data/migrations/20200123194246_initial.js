exports.up = async function(knex) {
  await knex.schema.createTable('characters', tbl => {
    tbl.increments('id');
    tbl.string('name', 100).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('characters');
};
