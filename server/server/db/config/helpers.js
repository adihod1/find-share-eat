function setGlobalDBConfig(queryInterface) {
    return Promise.all([
        queryInterface.sequelize.query('SET auto_increment_offset = 4;'),
        queryInterface.sequelize.query('SET auto_increment_increment = 10;')
    ])
}

module.exports = {
    setGlobalDBConfig
}