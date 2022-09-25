/******** For testing localStorage *********************
/*const sampleItems = [
    {'name':'juice','img':'https://www.gs1india.org/media/Juice_pack.jpg','description':'Orange and Apple juice fresh and delicious'},
    {'name':'Tayto','img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg','description':'Cheese & Onion Chips'}
];

localStorage.setItem("recipes", JSON.stringify(cookBook.recipes));
*/

class RecipeController {
     constructor(currentId=0) {
         this.recipes = []; 
         this.currentId = currentId;
     };

     addRecipe(title, description, imgURL, createdAt){ //parameters for the add item method()
         const recipe = {   //recipe is an object
             id: this.currentId++, //currentId increments by 1.
             title: title,
             description: description,
             imgURL: imgURL,
             createdAt: createdAt
         };

         this.recipes.push(recipe); //The .push method pushes the product object into the empty(this.items) array and returns the new length.
     };

     /******** For testing localStorage *********************
     loadRecipesFromLocalStorage() {
        const storageItems = localStorage.getItem("recipes")
        if (storageItems) {
            const recipes = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items)           
        }
    }*/
};

function addRecipeCard(recipe) {
    const cardHTML = '<div class="card border border-dark m-1" style="width: 20rem;">\n' +
      '    <div class="card-body">\n' +
        '    <img class="card-img-top" src="' + recipe.imgURL + '" width="400" height="250"  alt="Recipe Image">\n' +
        '        <h5 class="card-title">' + recipe.title + '</h5>\n' +
        '        <p class="card-text">' + recipe.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '  </div>\n' +
        '</div>\n' +
        '<br/>';
 
    const cardsContainer = document.getElementById("list-items");
    cardsContainer.innerHTML += cardHTML;
};

cookBook = new RecipeController();
cookBook.addRecipe("Napolitan Tomato Sauce","My wife's Family Recipe for Napolitan Style Tomato Sauce!","./images/NapolitanSauce.jpg","09/23/2022");
cookBook.addRecipe("Roman Tomato Sauce","My wife's Family Recipe for Roman Style Tomato Sauce!","./images/RomanSauce.jpg","09/23/2022");
cookBook.addRecipe("Turino Tomato Sauce","My wife's Family Recipe for Turino Style Tomato Sauce!","./images/san-marzano-tomato-sauce-2.jpg","09/23/2022");
cookBook.addRecipe("Grilled Cheese","Old Fashioned Grilled Cheese Sandwich - like mom made","./images/best-grilled-cheese-sandwich-468.jpg","09/24/2022");
cookBook.addRecipe("Chunky Blue Cheese Burger - Perfect For Football","A hamburger for the millenium - juicy ground beef and chunks of bleu cheese!","./images/Chunky Blue Cheese Burger.jpg","09/23/2022");
cookBook.addRecipe("Beef Stroganoff","Golden seared juicy beef strips smothered in an incredible sour cream mushroom gravy","./images/Classic Beef Stroganoff.jpg","09/23/2022");
cookBook.addRecipe("Ultimate Oven Barbecued Ribs","These easy oven baked ribs with brown sugar are fall-off-the bone delicious.","./images/Grilled-BBQ-Ribs-8.jpg","09/23/2022");
//console.log(cookBook.addRecipe[2]);


for (i=0; i < cookBook.recipes.length; i++){
    addRecipeCard(cookBook.recipes[i]);
}

/* remove later
addRecipeCard(cookBook.recipes[0]);
addRecipeCard(cookBook.recipes[1]);
addRecipeCard(cookBook.recipes[2]);
addRecipeCard(cookBook.recipes[0]);
addRecipeCard(cookBook.recipes[1]);
addRecipeCard(cookBook.recipes[2]);
*/
