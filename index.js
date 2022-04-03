const express = require('express');
const http = require('http');
const morgan = require('morgan');
const body_parser = require('body-parser');

const dish_router = require('./routes/dish-router');
const promotion_router = require('./routes/promo-router');
const leader_router = require('./routes/leader-router');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(body_parser.json());

app.use('/dishes', dish_router);
app.use('/promotions', promotion_router);
app.use('/leaders', leader_router);

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})