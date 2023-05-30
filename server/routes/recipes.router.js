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

router.post('/', (req, res) => {
    const recipes = [req.body.user_id,req.body.category_id, req.body.recipe_name, req.body.ingredients, req.body.instructions];
    console.log(req.body);
    const queryText = `INSERT INTO "recipes" ("user_id", "category_id", "recipe_name", "ingredients", "instructions") 
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, recipes).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST recipe ${error}`);
        res.sendStatus(500);
    });
});



router.put('/', (req, res) => {

    // Not sure if this is necessary, but will keep it in for now
    const recipeEdit = [req.body.recipe_name, req.body.ingredients, req.body.instructions, req.body.id];
    console.log('Checking req.body', req.body);
    const queryText = `UPDATE "recipes" SET "recipe_name" = $1, "ingredients" = $2, "instructions" = $3 WHERE "id"= $4;`;
    pool.query(queryText, recipeEdit).then((result) => {
        console.log('Success!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT for editRecipe ${error}`)
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