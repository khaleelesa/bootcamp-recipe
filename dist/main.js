const renderRecipes = new Renderer()

$("#btn").on("click", function() {

    let input = $("#item-input").val()
    $.get(`recipes/${input}`, function(recipes) {

        renderRecipes.renderRecipesInfo(recipes)

    })
})