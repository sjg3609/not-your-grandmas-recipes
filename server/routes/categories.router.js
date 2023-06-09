const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "categories" ORDER BY "description" ASC;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET all categories: ${error}`);
        res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    const queryText = `SELECT * FROM categories
    JOIN recipes ON recipes.category_id = categories.id
    WHERE categories.id = $1;`;
    pool.query(queryText, [id]).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`Error in GET recipes by category ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;