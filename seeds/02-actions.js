    

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {task: 'Fork project', notes: 'dont mess up lol', complete: 'false', project_id: 1}
      ]);
    });
};