const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "recipes" ORDER BY "id" ASC
                       `;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`Error in GET all recipes: ${error}`);
        res.sendStatus(500);
    })
});

// new GET route for the specific id that we want on the RecipeCard component

router.get('/:id', (req, res) => {
    let id = req.params.id;
    const queryText = `SELECT recipes.*, categories.description AS category FROM recipes
                       JOIN categories ON recipes.category_id = categories.id
                       WHERE recipes.id = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in completing SELECT recipe query ${error}`);
        res.sendStatus(500);
    });                  
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
        const recipes = [req.body.user_id, recipeId, req.body.recipe_name, req.body.ingredients, req.body.instructions, req.body.notes];
        queryText = `INSERT INTO "recipes" ("user_id", "category_id", "recipe_name", "ingredients", "instructions", "notes") 
                     VALUES ($1, $2, $3, $4, $5, $6);`;
        for(let recipe of recipes) {
            await db.query(queryText, [recipe, recipeId]);
        }
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
    const recipeNote = req.body.notes
    const queryText = `UPDATE "recipes" SET "notes" = $1 WHERE "id"=$2;`;
    pool.query(queryText, [recipeId, recipeNote]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in UPDATE notes ${error}`);
        res.sendStatus(500);
    });
});

router.put('/edit/:id', (req, res) => {
    const recipeId = req.params.id;
    // Not sure if this is necessary, but will keep it in for now
    const recipeEdit = req.params.body;
    const queryText = `UPDATE "recipes" SET "recipe_name" = $1, "ingredients" = $2, "instructions" = $3 WHERE "id"= $4;`;
    pool.query(queryText, [recipeId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    let queryText = `DELETE FROM "recipes" WHERE "id"=$1;`;
    pool.query(queryText, [deleteId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;