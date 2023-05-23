const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "recipes" ORDER BY "id" ASC
                       JOIN "categories" ON "categories"."id" = "recipes"."category_id";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`Error in GET all recipes: ${error}`);
        res.sendStatus(500);
    })
});

router.post('/', async (req, res) => {
    const db = await pool.connect();
    // POST route code here
    try {
        // Tells Postgres to begin running the queries
        await db.query('BEGIN');
        let queryText = `INSERT INTO "categories" ("description") VALUES ($1) RETURNING "id";`;
        const result = await db.query(queryText, [req.body]);
        // TODO: We should make sure that rows.length is > 0
        const recipeId = result.rows[0].id;
        // const recipes = [];
        queryText = `INSERT INTO "recipes" ("user_id", "category_id", "recipe_name", "ingredients", "instructions", "notes") 
                     VALUES ($1, $2, $3, $4, $5, $6);`;
        // for(let recipe of recipes) {
        //     await db.query(queryText, [recipes, recipeId]);
        // }
        // Commits all of the queries
        await db.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        console.log(`ROLLBACK ${error}`);
        await db.query('ROLLBACK');
        res.sendStatus(500);
    } finally {
        db.release();
    }
});

router.put('/:id', (req, res) => {
    const recipeId = req.params.id;
    const queryText = `UPDATE "recipes" SET "notes" WHERE "id"=$1;`;
    pool.query(queryText, [recipeId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in UPDATE notes ${error}`);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    const deleteId = Number(req.params.id);
    let queryText = `DELETE FROM "recipes" WHERE "id"=$1;`;
    pool.query(queryText, [deleteId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;