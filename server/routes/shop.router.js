const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET - get database list
 router.get('/', (req, res) => {
     console.log('testing get');
     let queryText = `SELECT * FROM cart ORDER BY id;`;
     pool.query(queryText)
     .then((result) => {
         res.send(result.rows);
     }).catch((error) => {
         console.log('error in query', error);
         res.sendStatus(500);
     });
 });

 //POST
 router.post('/', (req,res) => {
    let newItem = req.body;
    let queryText = `INSERT INTO "cart" ("item", "quantity", "unit") VALUES ($1, $2, $3)`;
    pool.query(queryText, [newItem.item, newItem.quantity, newItem.unit])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
 });

 //PUT

 router.put('/:id', (req, res) => {
    console.log(req.params);
    let queryText = `
    UPDATE "cart" set "purchased" = $1
    WHERE "id" = $2;
    `;
    pool.query(queryText, [true, req.params.id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) =>{
            console.log(error);
            res.sendStatus(500);
        });
 });

 //DELETE

 router.delete('/:id', (req, res) => {
    console.log('req.params', req.params);
    let queryText = `DELETE FROM "cart" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in req.params.id', error);
            res.sendStatus(500);
        });
});

module.exports = router;