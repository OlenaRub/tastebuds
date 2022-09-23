// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);
alert("Task5");

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'Borsch',
        'img':'images/borsch.jpeg',
        'description':'Ukranian Borsch'},
        {'name':'Small House',
        'img':'images/smallhouse.jpeg',
        'description':'Ukranian Cake'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}
loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();