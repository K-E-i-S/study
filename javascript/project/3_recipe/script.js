'use strict';

const mealEl = document.getElementById('meal');
const searchEl = document.getElementById('search');
const menuInputEl = document.getElementById('menuInput');

async function getRandomMeal() {
    const data= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const JsonData= await data.json();
    const randomMeal = JsonData.meals[0];
    console.log(randomMeal);
    addRecipe(randomMeal);

};
getRandomMeal();

async function getMealById(id) {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const JsonData = await data.json();
    const meal = JsonData.meals[0];
    console.log(meal);
    addRecipe(meal);
};
getMealById(52772);

async function getMealsBySearch (term) {
    console.log(term);
    const meals = [];
    try {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + term;
        const data = await fetch(url);
        const JsonData = await data.json();
        if (!JsonData) return new Error('error');

        JsonData.meals.forEach(jsondata => {
            const meals = jsondata;
            addRecipe(meals);
        });
        //const meals = JsonData.meals[0];

    }catch(err) {
        throw err;
    };
};

function addRecipe(recipeData, ramdom = false) {
    
    const markup = `
    <li class='menu__list' id='meal'>
        <img src="${recipeData.strMealThumb}" class='menu__image'>
        <span class='menu__text'>${recipeData.strMeal}</span>
    </li>`;

    mealEl.insertAdjacentHTML("afterend", markup );
};



searchEl.addEventListener('click', function (e) {
    const inputValue = menuInputEl.value;
    const v = checkInputValue(inputValue);
    if (inputValue === ""){
        alert('input');
    } else {
        getMealsBySearch(inputValue);
    };
});

function checkInputValue(value) {
    const v = value;
    const t = v.test(['A-Za-z']);
    console.log(t);
    return t;
}

/*

function addMealToLS(meal) {
    const mealIds = getMealsFromLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

function removeMealFromLS(mealId) {
    const mealIds = getMealsFromLS();

    localStrage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));
};


function getMealsFromLS() {
    const mealIds = localStrage.getItem('mealIds');
}

*/