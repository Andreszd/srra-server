const { Sequelize } = require('sequelize')
class ConnectionDB{
    constructor(){
        if(ConnectionDB.instance){
            console.log('devuelvo instancia creada')
            return ConnectionDB.instance
        }
        
        ConnectionDB.instance = this

        this.driver = new Sequelize('todolist','joseandres','12345aa',{
            host:'localhost',
            port:'5432',
            dialect:'postgres',
            pool: {
                max:5,
                min:0,
                acquire: 30000,
                idle:10000
            },
            logging : false,
            define:{
                timestamps:true
            }
        })
    }
    async setConnectionDb(){
        try {
            await this.driver.sync()
            console.log('connection has been estalished succesfully')
        } catch (error) {
            console.log('Unable to connect to the database',error)
        }
    } 
    getConnectionDB(){
        return this.driver
    }
}
const connection = new ConnectionDB()
module.exports = connection