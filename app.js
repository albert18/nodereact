const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

// using routes
app.use(adminRoutes);
app.use(shopRoutes);


app.listen(3000);


// app.listen(3000); //Alternative
// // const server = http.createServer(app);
// // server.listen(3000);  