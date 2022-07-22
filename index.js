const express = require('express')
const path = require('path')

const { PORT } = require("./configs/config")
const apiRouter = require('./router/api.router')
// connect to db here

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "static")))

app.use("/", apiRouter)

app.listen( PORT, () => {
    console.log(`App listen http://localhost:${PORT}`)
})

function _connectDB(){
    // connect  
}