var digitalParse = {
    ones: "",
    tens: "",
    hundreds: "",
    
    getDigit: function(inputString) {
       
        if ((parseInt(inputString)<999)||(parseInt(inputString)>-1)) {
            this.parse(inputString);
            return parseInt(inputString);
        }
        else if ((parseInt(inputString)==-1)){
            return -1;
        }
        else{
            return 0;
        }
    },
    parse: function(inputString) {
        var j=0;
        for(var i=inputString.length-1;i>=0;i--){
            
            switch (j){
                case 0: 
                    this.ones = inputString[i];
                    break;
                
                case 1: 
                    this.tens = inputString[i];
                    break;    
                
                case 2: 
                    this.hundreds = inputString[i];
                    break;    
                
            }
            
          j++;
        }  
    },
    clear: function(){
        this.ones= "";
        this.tens= "";
        this.hundreds= "";
    }
    
    
}

function displayResult(obj){
    document.write("Вы ввели число " +obj.hundreds+obj.tens+obj.ones+"<br>");
    document.write("В данном числе: <br>");
    document.write("Единиц: " + obj.ones + "<br>");
    document.write("Десяток: " + obj.tens + "<br>");
    document.write("Сотен: " + obj.hundreds + "<br>");
    console.log(digitalParse);
}
   
do {
    var a=digitalParse.getDigit(prompt("Введите число от 0 до 999, -1 для выхода", ""));
    if (a>0){
        
        displayResult(digitalParse);
    }
    else if(!a){
        alert("Число не входит в диапазон от 0 до 999 или это не число");
        digitalParse.clear();
        console.log(digitalParse);
    }
}while (a!=-1);