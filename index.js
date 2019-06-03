const express = require('express');
const path = require('path');

// const knex        = require("knex")
const cookieSession = require('cookie-session');
const app = express();
const environment = process.env.NODE_ENV || 'development';  // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment];  // require environment's settings from knexfile
const knex = require('knex')(configuration);       // connect to DB via knex using env's settings

app.use(cookieSession({
	name: 'session',
	keys: ['key1', 'key2'],
	maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));
const categoryRoutes = require("./routes/category");
const ingredientsRoutes = require("./routes/ingredients");
const recipeRoutes = require("./routes/recipe");
const storeRoutes = require("./routes/store");
const searchRoutes = require("./routes/search");
const priceRoutes = require("./routes/price");
const TESTRoutes = require('./routes/recipeIngredients');
const quantityRoutes = require('./routes/quantity');
const recipeStepsRoutes = require('./routes/recipe_steps');
const ingredientImageRoutes = require('./routes/image');
// Serve the static files from the React app
 app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
// app.get('/api/recipe', (req,res) => {
// 	var list = ["item1", "item2", "item3"];
// 	res.json(list);
// 	console.log('Sent list of items');
// });
 app.use("/api/category", categoryRoutes(knex));
 app.use("/api/ingredients",ingredientsRoutes(knex));
 app.use("/api/recipe", recipeRoutes(knex));
 app.use("/api/store", storeRoutes(knex));
 app.use("/api/search", searchRoutes(knex));
 app.use("/api/price", priceRoutes(knex));
 app.use("/api/ingredient", TESTRoutes(knex));
 app.use("/api/quantity", quantityRoutes(knex));
 app.use("/api/recipesteps", recipeStepsRoutes(knex));
 app.use("/api/image", ingredientImageRoutes(knex));

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
// 	res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);