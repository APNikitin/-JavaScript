var widthVisible = screen.availWidth, heightVisible=screen.availHeight;
function showBigPicture(index){
    
   var thisImg = document.getElementById("bigimage");
    thisImg.style.transition = "1s all";
   thisImg.style.opacity = "0"; 
    document.getElementById("errStr").style.opacity = "0";
   thisImg.src = "image/big/" + (++index) + ".jpg";
   thisImg.onload = function(){
       thisImg.style.opacity = "100";
   }
   thisImg.onerror = function(){
       document.getElementById("errStr").style.opacity = "100";
   } 
        
   
       
    
    
}
function onClickSmall(event){
    var pBox = event.target;
    showBigPicture(pBox.id.substring(6));
}

function createFrame(parentObject,idObject){
    var picBox = document.createElement("img") ;
    document.getElementById(parentObject).appendChild(picBox);
    
    picBox.style.border = " 2px solid #000";
    picBox.id = "picBox" + idObject;
    picBox.src = "image/small/" + (++idObject) + ".jpg";
    picBox.addEventListener("click",onClickSmall);
    
}
var topDiv = document.createElement("div");
document.body.appendChild(topDiv);
topDiv.style.width = "100%";
topDiv.style.minHeight = heightVisible /2 + "px";
topDiv.style.borderBottom = "2px solid #999"; 
topDiv.id = "top";
topDiv.style.textAlign = "center";
var bigImg = document.createElement("img");
document.getElementById("top").appendChild(bigImg);
bigImg.style.opacity = "0";
bigImg.style.border = " 2px solid #000";
bigImg.id = "bigimage";
bigImg.style.transition = "1s all";
var errorString = document.createElement("h2");
document.getElementById("top").appendChild(errorString);
errorString.style.opacity = "0";
errorString.id = "errStr";
errorString.innerHTML = " Картинки то нету ";
var bottomDiv = document.createElement("div");
document.body.appendChild(bottomDiv);
bottomDiv.id = "bottomD";
bottomDiv.style.display = "flex";
bottomDiv.style.justifyContent = "space-around";
bottomDiv.style.paddingTop = "20px";

for (var i=0;i<3;i++){
    createFrame(bottomDiv.id,i);
}