import * as model from './model.js';
import { MODEL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import pagniationView from './views/pagniationView.js';
import { getJSON } from './helpers.js';
import addRecipeVeiw from './views/addRecipeVeiw.js';


if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();


    // 0) update results view to mark selected search result 
    resultsView.update(model.getSearchResultsPage());
    
    // 3 updating bookmarks View
    bookmarksView.update(model.state.bookmarks);

    // 1 loding recipe
    await model.loadRecipe(id);

    // 2 loding recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError();
    console.error(err);
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
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    pagniationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goTopage) {
  console.log('controlPagination');

  // 1) render new results 
  resultsView.render(model.getSearchResultsPage(goTopage));

  // 2) render new paginaiton buttons
  pagniationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Addremove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id);
  

  // 2) Update recipe view 
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeVeiw.renderSpinner();


    // upload he new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // render recipe 
    recipeView.render(model.state.recipe);

    // success message
    addRecipeVeiw.renderMessage();

    // render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //window.history.back();

    // close for window
    setTimeout(function () {
      addRecipeVeiw.toggleWindow();
    }, MODEL_CLOSE_SEC * 1000);
  } catch(err) {
    console.error(err);
    addRecipeVeiw.renderError(err.message);
    
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  pagniationView.addHandlerClick(controlPagination);
  addRecipeVeiw.addHandlerUpload(controlAddRecipe);
}
init();