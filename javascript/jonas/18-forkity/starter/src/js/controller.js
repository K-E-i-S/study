import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import { getJSON } from './helpers.js';


if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1 loding recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2 loding recipe
    recipeView.render(model.state.recipe);
    
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) load search results 
    await model.loadSerchResults(query);

    // 3) render results 
    console.log('controller');
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
/*  
window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);
*/

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();