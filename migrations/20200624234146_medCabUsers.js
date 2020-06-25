
exports.up = function(knex) {
    return knex.schema.createTable('medCabUsers', users => {
        users.increments();    
        users
          .string('username', 255)
          .notNullable()
          .unique();
        users.string('password', 255).notNullable();
      })
      .createTable('strains', strain => {
        strain.increments();
        strain.string('strainName', 128)
             .notNullable();
        strain.string('class', 128)
             .notNullable();
        strain.string('moodEffect', 128)
             .notNullable();        
      })
      .createTable('savedList', saved => {
        saved.increments();
        saved.string('strainName', 128)
             .notNullable()
             .references('strains.strainName')
        saved.string('username')
             .notNullable()
             .references('medCabUsers.username')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('savedList')
    .dropTableIfExists('strains')
    .dropTableIfExists('medCabUsers');     
   
};
