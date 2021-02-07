// const searchForm = document.querySelector('form');
// const searchResultDiv = document.querySelector('searchResult');
// const container = document.querySelector('container');
// let searchQuery = '';


// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     searchQuery = event.target.querySelector('input').value;
//     fetchAPI();
// });

// async function fetchAPI() {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`;
//     const response = await fetch(url);
//     const data = await response.json();
//     generateHTML(data.meals);
//     console.log(data);
// }

// function generateHTML(results) {
//     let generatedHTML = '';
//     results.map(result => {
//         generatedHTML += `
//        <div class="item">
//                     <img src="images/pizza.jpg" alt="">
//                     <div class="foodName">
//                         <h3 class="title">This is the food</h3>
//                     </div>
//                 </div> 
//        `
//     });
//     // searchResultDiv.innerHTML = generatedHTML;
// }

// const apiKey = '1';
// const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
// .then(res => res.json())
// .then(data => displayMeals(data));

// const displayMeals = meal =>{
//     const searchResultDiv = document.getElementById('items');
//     meal.forEach(meal => {
//         const mealInfo = `
//         <div class="item">
//         <img onclick= src=${meal.img} alt="">
//         <div class="foodName">
//             <h3 class="title">${meal.name}</h3>
//         </div>
//     </div>
//         `;
//         searchResultDiv.innerHTML = mealInfo;
//     });
//         console.log(meals);
// }

// const displayMealDetail = name => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data[0].name));
// }



// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
// .then(res => res.json())
// .then(data => console.log(data));



    // const button = document.getElementById('button');const buttonClicked = button.addEventListener('click', function(){
    //     const recipeName = document.getElementById('input').value;
    //     console.log('clicked');
    // });



    document.getElementById('searchButton').addEventListener('click', function(){

        const recipeName = document.getElementById('inputArea').value;
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
        .then(res => res.json())
        .then(data => {
    
            recipeInfo(data.meals);
            
        })

        const recipeInfo = recipes => {
        
            const searchedRecipe = document.getElementById("searchResultDiv");
            searchedRecipe.innerHTML = "";
    
            recipes.forEach( recipe => {
                    
                    const recipeItemDiv = document.createElement("div");
                    recipeItemDiv.className = "recipeItem";
    
                    const recipeInfo = `
                    <img class="item" onclick="mealDetails('${recipe.strMeal}')" src="${recipe.strMealThumb}"> 
                    <h5 class="ingredientsLabel" onclick="mealDetails('${recipe.strMeal}')" class="meal-name" >${recipe.strMeal}</h5>
                    
                    `;
                    
                    recipeItemDiv.innerHTML = recipeInfo;
                    searchedRecipe.appendChild(recipeItemDiv);
                });
        }
        
    })

    const recipeDetails = recipeDetails => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeDetails}`)
            .then(res => res.json())
            .then(data => {
                renderRecipeInfo(data.meals[0]);
                console.log(data.meals[0]);
            })
    }

    const renderRecipeInfo = recipe => {
        const recipeIngredients = document.getElementById("ingredientsList");
        // foodDetail.style.display = "block";
        recipeIngredients.innerHTML =
            `<img src="${recipe.strMealThumb}">
            <ul>
            <li>${recipe.strMeasure1}${recipe.strIngredient1}</li>
            <li>${recipe.strMeasure2}${recipe.strIngredient2}</li>
            <li>${recipe.strMeasure3}${recipe.strIngredient3}</li>
            <li>${recipe.strMeasure4}${recipe.strIngredient4}</li>
            <li>${recipe.strMeasure5}${recipe.strIngredient5}</li>
            <li>${recipe.strMeasure6}${recipe.strIngredient6}</li>
            <li>${recipe.strMeasure7}${recipe.strIngredient7}</li>
            <li>${recipe.strMeasure8}${recipe.strIngredient8}</li>
            <li>${recipe.strMeasure9}${recipe.strIngredient9}</li>
            <li>${recipe.strMeasure10}${recipe.strIngredient10}</li>
          </ul>`;
    }