const db = require('../dbConfig')

module.exports = {
    addProjects: (project) => {
        return db('projects')
        .insert(project)
    },
    
    getActions: () => {
        return db('actions')
    },

    addActions: (action) => {
        return db('actions')
        .insert(action)
    },

}