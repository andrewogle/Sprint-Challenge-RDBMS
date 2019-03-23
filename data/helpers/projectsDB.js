
const db = require('../dbConfig')



module.exports = {

    getProjects: () => {
        return db('projects')
    },

    addProjects: (project) => {
        return db('projects')
        .insert(project)
    }

}