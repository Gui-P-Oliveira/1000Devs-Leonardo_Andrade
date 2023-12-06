const express = require('express')
const routes = require('./src/routes')
const server = express()
const PORT = 3007

server.use('/', routes)

server.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))

