var widthVisible = screen.availWidth
    , heightVisible = screen.availHeight;
document.body.style.width = widthVisible - (widthVisible / 10);
document.body.style.margin = "0 auto";
document.body.style.textAlign = "center";
var basketName = document.createElement("h2");
document.body.appendChild(basketName);
basketName.innerHTML = "Ваша корзина покупок";
var basketDiv = document.createElement("div");
document.body.appendChild(basketDiv);
basketDiv.style.width = "100%";
basketDiv.style.minHeight = heightVisible / 5 + "px";
basketDiv.style.borderBottom = "2px solid #999";
basketDiv.id = "basket";
var marketDiv = document.createElement("div");
document.body.appendChild(marketDiv);
marketDiv.id = "market";



var tovar = {
    id: 0,
    costs: 0,
    image: "",
    name: "Товар ",
    createTovar: function(id1,costs1){
        this.id = id1;
        this.costs = costs1;
        this.displayTovar(document.getElementById("market"));
    },
    displayTovar: function(parentId) {
        var tovarDiv = document.createElement("div");
        parentId.appendChild(tovarDiv);
        tovarDiv.id = "tovar_" + this.id;
        tovarDiv.className = "tovar";
        
        var tovarName = document.createElement("h3");
        tovarDiv.appendChild(tovarName);
        tovarName.className = "tovar-name";
        tovarName.innerHTML = this.name + this.id;
        
        var costText = document.createElement("p");
        tovarDiv.appendChild(costText);
        costText.innerHTML = "Цена: " + this.costs + " руб.";
       
        var purchButton = document.createElement("div");
        tovarDiv.appendChild(purchButton);
        purchButton.className = "purch-button";
        purchButton.addEventListener("click",basket.pushInBasket);
        
        var purchText = document.createElement("p");
        purchButton.appendChild(purchText);
        purchText.innerHTML = "Купить";
        purchText.className = "purch-text";
    }
}
var priceList= new Array();

var basketMarket = {
    purchaseMass: []
    , allCost: 0
    , clearBasket: function () {}
    , pushInBasket: function (event) {
        var takeTovar=event.target;
        var id = parseInt(takeTovar.parentElement.parentElement.id.substr(6));
        /*this.purchaseMass.push(priceList[id]);*/
        console.log(priceList);
    }
}
var basket=basketMarket;
function addTovarToMarket(idTovar) {
    var newTovar = tovar;
    newTovar.createTovar(idTovar,(Math.floor(Math.random() * (10000 - 500 + 1)) + 500));
    priceList.push(newTovar);
    console.log(newTovar);
    if (idTovar) {
        console.log(priceList[idTovar-1]);    
    }
    
}


for (var i = 0; i < 10; i++) {
    
    addTovarToMarket(i);
}
console.log(priceList);