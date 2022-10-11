var seqNbr = 6;

/******** For testing localStorage *********************
/*const recipeStorage = [
    {'name':'juice','img':'https://www.gs1india.org/media/Juice_pack.jpg','description':'Orange and Apple juice fresh and delicious'},
    {'name':'Tayto','img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg','description':'Cheese & Onion Chips'}
];

localStorage.setItem("recipeStorage", JSON.stringify(cookBook.recipes));
*/
showNavbarHeader();
showFooter();

class RecipeController {
     constructor(currentId=0) {
         this.recipes = []; 
         this.currentId = currentId;
     };

     addRecipe(title, description, imgURL, createdAt, nameHTML){ 
         const recipe = {   //recipe is an object
             id: this.currentId++,
             title: title,
             description: description,
             imgURL: imgURL,
             createdAt: createdAt,
             nameHTML: nameHTML
         };

         this.recipes.push(recipe); 
     };

     /******** For testing localStorage *********************
     loadRecipesFromLocalStorage() {
        const storageItems = localStorage.getItem("recipes")
        if (storageItems) {
            const recipes = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items)           
        }
    }*******************************************************/
};

cookBook = new RecipeController();
cookBook.addRecipe("Napolitan Tomato Sauce","My wife's Family Recipe for Napolitan Style Tomato Sauce!","./images/NapolitanSauce.jpg","09/23/2022","#");
cookBook.addRecipe("Roman Tomato Sauce","My wife's Family Recipe for Roman Style Tomato Sauce!","./images/RomanSauce.jpg","09/23/2022","#");
cookBook.addRecipe("Turino Tomato Sauce","My wife's Family Recipe for Turino Style Tomato Sauce!","./images/san-marzano-tomato-sauce-2.jpg","09/23/2022","#");
cookBook.addRecipe("Borscht","Many people around the world have fallen in love with this iconic Ukranian soup, which was recognated on an Intangible Cultural Heritage list maintained by UNESCO","./images/Borscht.jpg","09/23/2022","borsch.html");
cookBook.addRecipe("Grilled Cheese","Old Fashioned Grilled Cheese Sandwich - like mom made","./images/grilled-cheese-sandwich.jpg","09/24/2022","#");
cookBook.addRecipe("Chunky Blue Cheese Burger - Perfect For Football","A hamburger for the millenium - juicy ground beef and chunks of bleu cheese!","./images/Chunky Blue Cheese Burger.jpg","09/23/2022","#");
cookBook.addRecipe("Beef Stroganoff","Golden seared juicy beef strips smothered in a sour cream mushroom gravy","./images/Classic Beef Stroganoff.jpg","09/23/2022","#");
cookBook.addRecipe("Ultimate Oven Barbecued Ribs","These easy oven baked ribs with brown sugar are fall-off-the bone delicious.","./images/Grilled-BBQ-Ribs-8.jpg","09/23/2022","#");
cookBook.addRecipe("Small House","Ukranian cheese cake without oven","./images/Small House 2.jpeg","10/11/2022","smallhouse.html");

//console.log(cookBook.addRecipe[2]);

for (i=0; i < cookBook.recipes.length; i++){
    addRecipeCard(cookBook.recipes[i]);
};


function addRecipeCard(recipe) {
    const cardHTML = '<div class="card border border-dark m-1" style="width: 19rem;">\n' +
      '    <div class="card-body">\n' +
        '    <p>Cuisine(coming soon)</p><img class="card-img-top" src="' + recipe.imgURL + '" width="400" height="250"  alt="Recipe Image">\n' +
        '        <h5 class="card-title">' + recipe.title + '</h5>\n' +
        '        <p class="card-text">' + recipe.description + '</p>\n' + 
        '        <div class="btn-group-sm">\n' +
        '          <a href="'+recipe.nameHTML+'" class="btn btn-primary btn-sm m-1">View</a>\n' +
        '        </div>\n' +
        '  </div>\n' +
        '</div>\n' +
        '<br/>';
 
    const cardsContainer = document.getElementById("list-items");
    cardsContainer.innerHTML += cardHTML;
};

function showNavbarHeader () {
    document.getElementById("navbar-header").innerHTML = 
    '  <!--navbar component-->' +
    '  <nav class="navbar navbar-expand-lg navbar-light bg-light">' +  
    '    <a class="navbar-brand" href="https://olenarub.github.io/tastebuds/">' +  
    '      <img src="images/tastebuds.jpg" alt="Tastebuds Logo" height="70"/>' +  
    '    </a>' +  
    '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +  
    '      <span class="navbar-toggler-icon"></span>' +
    '    </button>' +  
    '  <div class="collapse navbar-collapse" id="navbarSupportedContent">' +  
    '    <ul class="navbar-nav">' +  
    '      <li class="nav-item active" id="home">' +  
    '        <a class="nav-link" href="./index.html">Home</a>' +  
    '      </li>' +  
    '      <li class="nav-item">' +  
    '        <a class="nav-link" href="about.html">About Us</a>' +  
    '      </li>' +  
    '      <li class="nav-item">' +  
    '        <a class="nav-link" href="list.html">Search Recipes</a>' +  
    '      </li>' +  
    '      <li class="nav-item">' +  
    '        <a class="nav-link" href="form.html">Add A Recipe</a>' +  
    '      </li>' +  
    '    </ul>' +  
    '  </div>' +  
    
    '  </nav>'
    '  <!-- end navbar -->';
};

function showFooter () {
  document.getElementById("page-footer").innerHTML = 
    '  <!-- Footer -->' + 
    '  <footer class="footer">' + 
    '    <div class="container">' + 
    '      <div class="row">' + 
    '        <div class="footer-col">' + 
    '          <h4>company</h4>' + 
    '          <ul>' + 
    '            <li><a href="#">about us</a></li>' + 
    '            <li><a href="#">our services</a></li>' + 
    '            <li><a href="#">privaciy policy</a></li>' + 
    '          </ul>' + 
    '        </div>' + 
    '        <div class="footer-col">' + 
    '          <h4>Get Help</h4>' + 
    '          <ul>' + 
    '            <li><a href="#">FAQ</a></li>' + 
    '          </ul>' + 
    '        </div>' + 
    '        <div class="footer-col">' + 
    '          <h4>online order</h4>' + 
    '          <ul>' + 
    '            <li><a href="#">payment option</a></li>' + 
    '            <li><a href="#">order status</a></li>' + 
    '          </ul>' + 
    '        </div>' + 
    '        <div class="footer-col">' + 
    '          <h4>Follow Us</h4>' + 
    '          <ul>' + 
    '          <!--<div class="social-links">-->' + 
    '            <li><a href="#"><i class="fab fa-facebook-f">Facebook</i></a></li>' + 
    '            <li><a href="#"><i class="fab fa-twitter"></i>Twitter</a></li>' + 
    '            <li><a href="#"><i class="fab fa-instagram"></i>Instagram</a></li>' + 
    '            <li><a href="#"><i class="fab fa-linkedin-in"></i>LinkedIn</a></li>' + 
    '          <!--</div>-->' + 
    '          </ul>' + 
    '        </div>' + 
    '      </div>' + 
    '    </div>' + 
    '  </footer>' +
    '<!-- End Footer -->';   

};

function addInstruction () {
  seqNbr = seqNbr + 1;
  instList = document.getElementById("instructList");
  instList.innerHTML = instList.innerHTML + 
      '<li><input type="text" placeholder="instruction ' + seqNbr + '" class="form-control" id="instruction_' + seqNbr + '"></li>';
};

function showImage () {
  imgElement = document.getElementById("recipe-image");
  if (document.getElementById("recipeImageUrl").value === "") {
    imgElement.innerHTML = '<img class="recipe-image" src="images/DefaultImage.jpg" alt="" />'
  }
  else {
    imgElement.innerHTML = '<img class="recipe-image" src="' + document.getElementById("recipeImageUrl").value + '" alt="" />';
  } 
};
