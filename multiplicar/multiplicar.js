
const fs = require('fs');

let crearArchivo = ( base ) => {

    return new Promise( (resolve, reject) => {

        let contenido = '';

        for( let i = 0; i <= 10; i++ ) {
            contenido += ( `2 * ${ i } = ${ base * i }\n` );
        }
        
        fs.writeFile('tabla.txt', contenido, (err) => {

            if (err) reject(err);

            else 
                resolve( `tabla-${ base }.txt` );
        }); 

    } )

}

/* Manera 2 */
const crearArchivo2 = async( base = 5, listar, limite ) => {
    try {
        let contenido = '';

        for( let i = 0; i <= limite; i++ ) {
            contenido += ( `2 * ${ i } = ${ base * i }\n` );
        }

        if (listar) {
            console.log(contenido);
        }

        fs.writeFileSync( `tabla-${base}.txt`, contenido );

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {

    crearArchivo,
    crearArchivo2

}