const Sequelize = require('sequelize')  
const connectionDB = require('../config/db')

const Upload = connectionDB.getConnectionDB().define('UploadFiles',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_file:{
        type: Sequelize.STRING
    },
    url:{
        type: Sequelize.STRING
    }
})

module.exports = Upload