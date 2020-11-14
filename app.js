const Server = require('./server/index')
const connectionDB = require('./config/db')
const server = new Server(4000)


connectionDB.setConnectionDb()
server.setStaticPath(__dirname)
server.run()




