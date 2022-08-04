const express = require('express')
const path = require('path')
// import chalk from 'chalk';
const chalk = require("chalk")

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
    console.log(chalk.red("red"))
    console.log(chalk.rgb(15, 100, 204).inverse('Hello!'))
    console.log(chalk.hex('#DEADED').underline('Hello, world!'))
    console.log(chalk.bgHex('#DEADED').underline('Hello, world!'))
})

function _connectDB(){
    // connect  
}