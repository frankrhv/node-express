const express = require('express');
const body_parser = require('body-parser');

const promotion_router = express.Router();

promotion_router.use(body_parser.json());

const header = (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
}

promotion_router.route('/')
    .all(header)
    .get((req, res, next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end(`Will add the promotion: ${req.body.name} with details: ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /promotions`);
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promotions!');
    });

promotion_router.route('/:promoId')
    .all(header)
    .get((req, res, next) => {
        res.end(`Will send details of the promotion: ${req.params.promoId} to you!`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /promotions/${req.params.promoId}`);
    })
    .put((req, res, next) => {
        res.write(`Updating the promotion: ${req.params.promoId}\n`);
        res.end(`Will update the promotion: ${req.body.name} with details: ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`Deleting promotion: ${req.params.promoId}`);
    });


module.exports = promotion_router;