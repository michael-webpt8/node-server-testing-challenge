
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('characters').truncate();

  await knex('characters').insert([
    { name: "cartman" },
    { name: "Kenny" },
    { name: "Popeye" },
    { name: "Mighty Mouse" }
  ])
};
