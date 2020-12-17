
exports.up = function(knex) {
   return knex.schema
      .createTable('houses', table => {
         table.increments();
         table.string('name', 128).unique().notNullable();
      })
      .then(() => console.log("\n== Tables have been successfully created ==\n"));;
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('houses');
};
