const hbs = require('hbs');
/**
 * HELPERS
 */
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getNombre', () => {
    return 'hArOld sEaRa';
});

hbs.registerHelper('capitalizar', (texto) => {
    /**
     * EL SPLIT DIVIDE EL STRING EN ELEMENTOS DE UN ARREGLO DEPENDIENDO DEL SEPARADOR EN ESTE CASO EL ESPACIO, SE LE PUEDE INDICAR LA CANTIDAD O NUMERO DE SPLIT QUE SE REQUIEREN
     */
    let palabras = texto.split(' ');
    console.log(palabras)
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});