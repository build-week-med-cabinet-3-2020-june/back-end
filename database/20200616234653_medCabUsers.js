
exports.up = function(knex) {
    return knex.schema.createTable('medCabUsers', users => {
        users.increments();
    
        users
          .string('username', 255)
          .notNullable()
          .unique();
        users.string('password', 255).notNullable();
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('medCabUsers');
    };