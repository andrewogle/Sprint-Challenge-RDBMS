exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Sprint Challenge', description: 'Dont fail', completed: 'false'}
      ]);
    });
};