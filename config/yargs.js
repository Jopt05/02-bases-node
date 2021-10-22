const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) || isNaN( argv.h ) ) {
            throw "La base tiene que ser un numero";
        }
        return true;
    })
    .argv;

module.exports = argv;