const path = require('path')
const routesUser = require('../routes/user.routes')
const authRoutes = require('../routes/auth.routes')
const fileRoutes = require('../routes/files.routes')

class Server {
    constructor(port) {
        this.express = require('express')
        this.cors = require('cors')
        this.env = require('dotenv').config()
        this.app = this.express()
        this.port = port
        this.fileUpload = require('express-fileupload')
        this.initConfig()
        this.setModel()
        this.setRoutes()
    }
    initConfig() {
        this.app.use(this.cors())
        this.app.set('port', process.env.PORT || this.port)
        this.app.use(this.fileUpload())
        this.app.use(this.express.static(path.join(__dirname, 'public')))
        this.app.use(this.express.urlencoded({ extended: true }))
        this.app.use(this.express.json())
    }
    setRoutes() {
        this.app.use('/api', routesUser)
        this.app.use('/api/auth', authRoutes)
        this.app.use('/api/files', fileRoutes)
    }
    run() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server run in ${this.app.get('port')}`)
        })
    }
    setModel() {
        require('../models/User')
        require('../models/Rol')
        require('../models/user_rol')
        require('../models/Upload')
    }
    setStaticPath(path) {
        this.app.use((req, res, next) => {
            req.pathUpload = path
            next()
        })
    }
}
module.exports = Server
