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
