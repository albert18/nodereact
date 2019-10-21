    const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// using routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Handling Error
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);


// app.listen(3000); //Alternative
// // const server = http.createServer(app);
// // server.listen(3000);  