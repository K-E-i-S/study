import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    }
};

export const loadRecipe = async function (id) {
    try {

        const data = await getJSON(`${API_URL}${id}`);
        
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
        // Temp error handling
        console.error(err);
        throw err;
    };

};


export const loadSerchResults = async function (query) {
    try {
        state.search.query = query;

        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image_url,
                publisher: rec.publisher,
            }
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    console.log(start, end);

    return state.search.results.slice(start, end);

}