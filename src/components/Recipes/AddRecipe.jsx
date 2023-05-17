


function AddRecipe() {

    return (
        <>
            <h1>Add Recipe!</h1>
            <form>
                Recipe Name:
                <input type="text" placeholder="Recipe Name"/>
                <br />
                Ingredients:
                <input type="text" placeholder="Ingredients"/>
                <br />
                Instructions:
                <input type="text" placeholder="Instructions"/>
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default AddRecipe;