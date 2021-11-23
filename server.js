const express = require('express')
const path = require('path')


const app = express()
const port = 8081
let recipes = []
var urllib = require('urllib');

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    
   urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response, data){
        recipes = JSON.parse(data).results.map(recipe => {return {title: recipe.title,thumbnail: recipe.thumbnail,href:recipe.href,ingredients:recipe.ingredients}})

        res.send(recipes)
    })
    
});

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

