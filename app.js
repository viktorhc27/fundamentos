const express = require('express');
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))



app.get('/', (req, res) => {
    /* res.send('mi respuesta desde express v.3'); */
    res.render('index',{titulo: "mi titulo dinamico"});
})

app.get('/servicios',(req, res)=>{
    /* res.send('estas en pagina de servicios'); */
    res.render('servicios',{titulo: "mi titulo dinamico"});
})

app.listen(port,()=>{
    console.log('Servidor a su servicio',port);
});



app.use((req, res) => {
    /* res.status(404).sendFile(__dirname+ "/public/404.html"); */
    /* res.status(404).render("404"); */

    res.status(404).render("404",{
        titulo: "404",
        descripcion: "not found"
    });
})












/* 
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("estoy respondiendo tu solicitudv3");
})


const puerto = 3000;

server.listen(puerto, () => {
    console.log("estoy escuchando v3");
})


 */


/* const {frutas, dinero} = require('./frutas');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: 'I am moodule',
    e: "oO",
    T: "U "
}));

 */

/* frutas.forEach(item => {
    console.count(item);
})
console.log(dinero); */