
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '2FTHF36F8SCA65608', Make: 'Ford', Model: 'F-350', Mileage: '178000'},
        {VIN: 'JS2RA41S235163290', Make: 'Suzuki', Model: 'Aerio', Mileage: '113000', transmissionType: 'Automatic'},
        {VIN: '1GKFK16K0RJ736886', Make: 'GMC', Model: 'Suburban', Mileage: '203,000', titleStatus: 'Salvage'}
      ]);
    });
};
