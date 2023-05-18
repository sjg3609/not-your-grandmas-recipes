import { useState, useEffect } from 'react-redux';



function AddRecipe() {
     

    return (
        <>
            <h1>Add Recipe!</h1>
            <form>
                Recipe Name:
                <br />
                <input type="text" placeholder="Recipe Name"/>
                <br />
                Ingredients:
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                <input type="text" placeholder="Ingredients"/>
                <br />
                Instructions:
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default AddRecipe;