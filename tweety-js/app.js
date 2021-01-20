const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
const nunjucks = require( 'nunjucks' );

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(express.static('./public'))

app.use(morgan('tiny'))

let tweetsDeEjemplo = [
    { id: 1, name: "juan", content: "este es un tweeettt de juan" },
    { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
    { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

app.get('/', function (req, res) {
    res.render( 'index', { tweets: tweetsDeEjemplo });
});

/* app.get('/stylesheets/style.css', function (req, res) {
    res.sendFile(__dirname+"/public/stylesheets/style.css")
}) */

app.listen(3000, function(){
    console.log('Estas escuhando en el puerto 3000')
});

































/* const express = require( 'express' );
const chalk = require('chalk');
const morgan = require('morgan'); 
var fs = require('fs')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const nunjucks = require( 'nunjucks' );
const app = express(); 
///////


app.use(morgan('combined', { stream: accessLogStream }))
// Logger Middleware: this middleware will log all request in the Apache combined format to STDOUT
// - stream : Output stream for writing log lines, defaults to process.stdout.
// - combined: Standard Apache combined log output.
// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
///////// Logger Middleware //////////

app.use(function (req, res, next) {
    // hacé tu logueo acá, probá console.log(req)
    // llamá a next(). Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
    console.log(chalk.red("pase por el primer middlewar"))
    next()
})

app.use('/special/', function (req, res, next) {

    console.log(chalk.blue('Pasé por el primer Middleware y por special'))
    next()
})

app.use(function(req, res, next){
    const data = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', personas: data} );
});

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

////////

app.use(morgan('tiny'))
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
}); */