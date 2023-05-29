const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(req.params.id);
//     const queryText = `SELECT * FROM "notes"
//                        JOIN "recipes" ON "recipes"."id" = "notes"."recipe_id"
//                        WHERE notes.id = $1;`;
//     pool.query(queryText, [id]).then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log(`Error in completeing SELECT notes ${error}`);
//         res.sendStatus(500);
//     })
// })

router.post('/', (req, res) => {
    // const recipeId = req.params.id;
    const recipeNote = req.body.notes;
    console.log(req.body.notes);
    const queryText = `INSERT INTO "notes" ("notes") VALUES ($1);`;
    pool.query(queryText, [recipeNote]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in UPDATE notes ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;