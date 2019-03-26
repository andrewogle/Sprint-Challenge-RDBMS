const db = require("../dbConfig");

module.exports = {
  getProjects: () => {
    return db("projects");
  },

  getById: id => {
    return db("projects").innerJoin('actions', 'project_id', 'projects.id')
  },

  addProjects: post => {
    return db("projects")
      .insert(post)
      .then(ids => {
        return getById(ids[0]);
      });
  }
};
