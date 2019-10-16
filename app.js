const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

// using routes
app.use(adminRoutes);
app.use(shopRoutes);

// Handling Error
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(3000);


// app.listen(3000); //Alternative
// // const server = http.createServer(app);
// // server.listen(3000);  