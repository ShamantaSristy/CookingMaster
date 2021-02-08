// SearchButton activation area
document.getElementById('searchButton').addEventListener('click', function () {

    const recipeName = document.getElementById('inputArea').value;
    searchForRecipe(recipeName);
});

// Recipe searching area
const searchForRecipe = recipeInformation => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeInformation}`)
        .then(res => res.json())
        .then(data => {

            recipeInfo(data.meals);
        })
        .catch(error => alert("Sorry this time! Our chef didn't know your searched recipe.Please try something else."))

}


// Search Results
const recipeInfo = recipes => {

    const searchedRecipe = document.getElementById("searchResultDiv");
    searchedRecipe.innerHTML = "";

    recipes.forEach(recipe => {

        const recipeItemDiv = document.createElement("div");
        recipeItemDiv.className = "recipeItem";

        const recipeInfo = `
                   <div>
                   <img class="item" onclick="recipeDetails('${recipe.strMeal}')" src="${recipe.strMealThumb}"> 
                   <h5 class="title" onclick="recipeDetails('${recipe.strMeal}')" class="meal-name" >${recipe.strMeal}</h5>
                   </div>
                    
                    `;

        recipeItemDiv.innerHTML = recipeInfo;
        searchedRecipe.appendChild(recipeItemDiv);
        document.getElementById('inputArea').value = "";
    });
}

// More information about recipe
const recipeDetails = recipeDetails => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeDetails}`)
        .then(res => res.json())
        .then(data => {
            renderRecipeInfo(data.meals[0]);
            const ingredients = document.getElementById('ingredientsList').style.display = "block";
            const searchResults = document.getElementById('searchResultDiv').style.display = "none";
            console.log(data.meals[0]);
        })
}


const renderRecipeInfo = recipe => {

    const recipeIngredients = document.getElementById("ingredientsList");
    recipeIngredients.innerHTML =
        `<img class="ingredientsImage" src="${recipe.strMealThumb}">
            <h1 class="h1Title" onclick="recipeDetails('${recipe.strMeal}')" class="meal-name" >${recipe.strMeal}</h1>
            <p class="ingredientsLabel">Ingredients</p>
            
            <ul>
                <li class="listItems">${recipe.strMeasure1}${' '}${recipe.strIngredient1}</li>
                <li class="listItems">${recipe.strMeasure2}${' '}${recipe.strIngredient2}</li>
                <li class="listItems">${recipe.strMeasure3}${' '}${recipe.strIngredient3}</li>
                <li class="listItems">${recipe.strMeasure4}${' '}${recipe.strIngredient4}</li>
                <li class="listItems">${recipe.strMeasure5}${' '}${recipe.strIngredient5}</li>
                <li class="listItems">${recipe.strMeasure6}${' '}${recipe.strIngredient6}</li>
                <li class="listItems">${recipe.strMeasure7}${' '}${recipe.strIngredient7}</li>
                <li class="listItems">${recipe.strMeasure8}${' '}${recipe.strIngredient8}</li>
                <li class="listItems">${recipe.strMeasure9}${' '}${recipe.strIngredient9}</li>
                <li class="listItems">${recipe.strMeasure10}${' '}${recipe.strIngredient10}</li>
           </ul>`;
}