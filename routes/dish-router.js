const express = require('express');
const body_parser = require('body-parser');

const dish_router = express.Router();

dish_router.use(body_parser.json());

const header = (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
}

dish_router.route('/')
    .all(header)
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end(`Will add the dish: ${req.body.name} with details: ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /dishes`);
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');
    });

dish_router.route('/:dishId')
    .all(header)
    .get((req, res, next) => {
        res.end(`Will send details of the dish: ${req.params.dishId} to you!`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
    })
    .put((req, res, next) => {
        res.write(`Updating the dish: ${req.params.dishId}\n`);
        res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`Deleting dish: ${req.params.dishId}`);
    });


module.exports = dish_router;