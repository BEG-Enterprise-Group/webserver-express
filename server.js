/**
 * REQUIREMENTS 
 */
const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

/**
 * CARPETA PUBLICA A LA QUE ACCEDE CUALQUIER PERSONA DESDE INTERNET
 */
app.use(express.static(__dirname + '/public'));
/**
 * EXPRESS HBS ENGINE
 */
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


/**
 * APIS Y REDIRECCIONES EN EL RAIZ PARA USAR LOS PARCIALES CON RENDER Y ASI HACER EL HTML DINAMICO Y SIN EXPTENCIONES EN LA URL
 */

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})