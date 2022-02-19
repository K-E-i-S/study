import { async } from 'regenerator-runtime';

export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.massage} (${data.status})`);

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: 4,
            sourceUrl: recipe.source_url,
            title: recipe.title
        };

    } catch (err) {
        alert(err);
    };

};