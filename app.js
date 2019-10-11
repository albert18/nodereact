const http = require('http');

const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
    console.log('In the middle ware')
    next();
});

app.use((req, res, next) => {
    console.log('In another the middle ware')
});

const server = http.createServer(app);

server.listen(3000);  