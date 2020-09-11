const path = require('path')
const routesUser = require('../routes/user.routes')
const authRoutes = require('../routes/auth.routes')
class Server{
    constructor(port){
        this.express = require('express')
        this.app = this.express()
        this.port = port
        this.initConfig()
        this.setModel()
        this.setRoutes()
    }
    initConfig(){
        this.app.set('port',process.env.PORT || this.port)    
        this.app.use(this.express.static(path.join(__dirname, 'public')))
        this.app.use(this.express.urlencoded({extended: true}))
        this.app.use(this.express.json())
    }
    setRoutes(){
        this.app.use('/',routesUser)
        this.app.use('/', authRoutes)
    }
    run(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`server run in ${this.app.get('port')}`)
        })
    }
    setModel(){
        
    }
    
}
module.exports = Server