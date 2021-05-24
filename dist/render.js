class Renderer {
    constructor() {}

    renderRecipesInfo = function(recipes) {
        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        $(".foodRecipe").empty()
        let newHTML = template({ recipes });
        $(".foodRecipe").append(newHTML);
    }
}