const fs = require('fs');
const argv = require("./config/yargs");

const multiplicar = require('./multiplicar/multiplicar');

// const { crearArchivo } = require('./multiplicar/multiplicar'); 

let base = 3;

// multiplicar.crearArchivo2( base )
//     .then( archivo => console.log(archivo, "creado") )
//     .catch( (error)=> console.log(error) )

// Desestructurar de los argumentos de consola INCORRECTO
// const [ , , arg3 = "base=5" ] = process.argv;
// const [ , base1 ] = arg3.split("=");
// console.log(base1);

// multiplicar.crearArchivo2( base1 )
//     .then( archivo => console.log(archivo, "creado") )
//     .catch( (error)=> console.log(error) )

multiplicar.crearArchivo2( argv.b, argv.l, argv.h )
    .then( archivo => console.log(archivo, "creado") )
    .catch( (error)=> console.log(error) )