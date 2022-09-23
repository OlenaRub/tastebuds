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
};

const cookBook = new RecipeController;
cookBook.addRecipe("Napolitan Tomato Sauce","My wife's Family Recipe for Napolitan Style Tomato Sauce!","./images/sauce.jpg","09/23/2022");
cookBook.addRecipe("Roman Tomato Sauce","My wife's Family Recipe for Roman Style Tomato Sauce!","./images/sauce.jpg","09/23/2022");
cookBook.addRecipe("Turin Tomato Sauce","My wife's Family Recipe for Turin Style Tomato Sauce!","./images/sauce.jpg","09/23/2022");
console.log(cookBook.recipes[2]);
