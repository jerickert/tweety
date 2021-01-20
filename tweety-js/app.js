const express = require( 'express' );
const app = express(); 
const chalk = require('chalk');
const morgan = require('morgan');
///////// Logger Middleware //////////
var fs = require('fs')
var path = require('path') //The path module provides utilities for working with file and directory paths.
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// createWriteStream: create a write stream (in append mode) into 'access.log'
// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
// __dirname: The directory name of the current module
// flags: 'a' - Open file for appending. The file is created if it does not exist.



// USO DE MIDDLEWARE

app.use(morgan('combined', { stream: accessLogStream }))
// Logger Middleware: this middleware will log all request in the Apache combined format to STDOUT
// - stream : Output stream for writing log lines, defaults to process.stdout.
// - combined: Standard Apache combined log output.
// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
///////// Logger Middleware //////////

app.use(function (req, res, next) {
    // hacé tu logueo acá, probá console.log(req)
    console.log(chalk.red("pasé por el primer middlware"))
    next()
    // llamá a `next()`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
})

app.use("/special/",function (req, res, next) {
    // hacé tu logueo acá, probá console.log(req)
    console.log(chalk.blue("pasé por el segundo middlware"+"entraste a special"))
    next()
    // llamá a `next()`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
})

app.use(morgan('tiny')) //formá simplificada de morgan




// COMIENZA EL LISTEN
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});