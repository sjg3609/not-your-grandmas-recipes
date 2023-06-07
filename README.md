
# Not Your Grandma's Recipes Box

## Description

_Duration: 3 Weeks

Not Your Grandmas Recipe Box solves an issue of having a family recipe box full of recipe cards, and not having a way to instantly find and access them! With Not Your Grandmas allows the user to see all recipes in the application, add a new one, and then be able to leave notes on individual recipes after they make them! You can also edit recipes after posting them to the application to correct any errors, or make changes to the name, ingredients and instructions.

To see the fully functional site, please visit: http://not-your-grandmas-recipes.herokuapp.com

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

- Postgres SQL
- [Node.js](https://nodejs.org/en/)
- Express


## Installation

1. Create a database named `your database name`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Read and browse the current recipes, by clicking on the Recipes tab!
2. On the Recipes page, there is a Catergories menu that allows you to see the specfic recipes for each category
3. Once you find a recipe, click on it to go to the Recipe Card for the details of what you need for ingredients and instructions
4. On the Recipe Card there is 3 buttons to Add a Note, Edit Recipe and Delete Recipe. 
5. Add a note will direct you to a new page that you will be able to write your note and it will then be displayed on the Recipe Card.
6. Edit Recipe will take you to another page, with prepopulated forms of the data associated with the recipe so you can make necessary changes.
7. The Add Recipe tab, will allow you to add a new Recipe to the Recipe Box! It comes with forms, where the categories are in a drop down menu to set, and then the user inputs the necessary data for Recipe Name, Ingredients and Instructions

## Built With

- Axios
- React.js
- Redux and Redux Sagas
- Material UI