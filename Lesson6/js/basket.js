var widthVisible = screen.availWidth, heightVisible=screen.availHeight;
document.body.style.width = widthVisible - (widthVisible/10);
document.body.style.margin = "0 auto";
document.body.style.textAlign = "center";
var basketName = document.createElement("h2");
document.body.appendChild(basketName);
basketName.innerHTML= "Ваша корзина покупок";
var basketDiv = document.createElement("div");
document.body.appendChild(basketDiv);
basketDiv.style.width = "100%";
basketDiv.style.minHeight = heightVisible /5 + "px";
basketDiv.style.borderBottom = "2px solid #999"; 
basketDiv.id = "basket";
var h2 
var marketDiv = document.createElement("div");
document.body.appendChild(marketDiv);
marketDiv.id = "market";
marketDiv.style.width = "100%";
marketDiv.style.display = "flex";
marketDiv.style.justifyContent = "space-around";
marketDiv.style.flexWrap = "wrap";
function addTovarToMarket(idTovar){
    var tovarDiv = document.createElement("div");
    document.getElementById("market").appendChild(tovarDiv);
    tovarDiv.id = "tovar_" + idTovar;
    tovarDiv.style.border = "2px solid #999";
    tovarDiv.style.minWidth = "250px";
    tovarDiv.style.justifyContent = "center";
    tovarDiv.style.margin = "20px";
    var tovarName =document.createElement("h3");
    tovarDiv.appendChild(tovarName);
    tovarName.innerHTML = "Товар " + idTovar;
    var purchButton = document.createElement("div");
    var costText = document.createElement("p");
    tovarDiv.appendChild(costText);
    costText.innerHTML = "Цена: " + (Math.floor(Math.random() * (10000 - 500 + 1)) + 500)+ " руб.";
    tovarDiv.appendChild(purchButton);
    purchButton.style.width = "60px";
    purchButton.style.height = "30px";
    purchButton.style.backgroundColor = "red";
    

    var purchText = document.createElement("p");
    purchButton.appendChild(purchText);
    purchText.innerHTML = "Купить";
    
}
var tovar={
    costs:0,
    image:"",
    
}
var basket={
    purchaseMass:[],
    allCost:0,
}
for (var i=0; i<10; i++){
    addTovarToMarket(i);
    
}