const http = require('http');

const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
    console.log('In the middle ware')
    // to reach next middleware
    next(); 
});

app.use((req, res, next) => {
    console.log('In another the middle ware TEST')
    res.send('<h1>Hello</h1>')
});



const server = http.createServer(app);

server.listen(3000);  