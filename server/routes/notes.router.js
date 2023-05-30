const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Check ID for notes', req.params.id);
    const queryText = `SELECT "notes".* FROM "notes"
                       JOIN "recipes" ON "notes"."recipe_id" = "recipes"."id"
                       WHERE "notes"."recipe_id" = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in completeing SELECT notes ${error}`);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    // const recipeId = req.params.id;
    const recipeNote = [req.body.user_id, req.body.recipe_id, req.body.notes];
    console.log(req.body);
    const queryText = `INSERT INTO "notes" ("user_id", "recipe_id", "notes") VALUES ($1, $2, $3);`;
    pool.query(queryText, recipeNote).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in UPDATE notes ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;