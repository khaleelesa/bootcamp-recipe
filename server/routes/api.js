const express = require('express')
const router = express.Router()
const urllib = require('urllib')


const json = {
    data: {}
}

router.get('/recipes/:ingredient', function(request, response) {

    let params = request.params.ingredient
    let recipes = []
    urllib.request('https://recipes-goodness.herokuapp.com/recipes/' + params, function(err, response_1) {
        json.data = JSON.parse(response_1).results

        for (let n of json.data) {
            recipes.push({ herf: n.href, title: n.title, thumbnail: n.thumbnail, ingredients: n.ingredients })
        }

        response.send(recipes)
    })


})
module.exports = router