houses = [
  { name: 'Gryffindor' },
  { name: 'Slytherin' },
  { name: 'Ravenclaw' },
  { name: 'Hufflepuff' }
]

exports.seed = function(knex) {
  return knex('houses').truncate()
    .then(function () {
      return knex('houses').insert(houses);
    })
    .then(() => console.log("\n== Tables have been seeded :) ==\n"));;
};
