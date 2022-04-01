const express = require('express');
const http = require('http');
const morgan = require('morgan');
const body_parser = require('body-parser');

const dish_router = require('./routes/dish-router');
const dish_router_id = require('./routes/dish-router');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(body_parser.json());

app.use('/dishes', dish_router);
app.use('/dishes', dish_router_id);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})