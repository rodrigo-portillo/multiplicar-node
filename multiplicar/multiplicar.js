/**
 * File system
 */
//requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        console.log('=================='.green);
        console.log(`===Tabla del ${base}===`.green);
        console.log('=================='.green);


        if (!Number(base)) {
            reject('La base debe ser un numero');
        }

        if (!Number(limite)) {
            reject('La base debe ser un numero');
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}\n`);
        }

        //resolve(data);

    });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}