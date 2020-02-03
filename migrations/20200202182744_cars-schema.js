
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 17).unique().notNullable();
      tbl.string('Make', 128).notNullable();
      tbl.string('Model', 128).notNullable();
      tbl.integer('Mileage', 128).notNullable();
      tbl.string('Transmission type', 128);
      tbl.string('Title status', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
