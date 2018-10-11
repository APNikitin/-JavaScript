
var cell={
    colorCell: "white",
    busyCell: false,
    borderStyle: "0 solid #000",
    boxSizingCell: "border-box",
    innerObject: "",
    box:null,
    sizeCell:"10px",
    newCell: function(parentBox){
        this.box = document.createElement("div");
        this.box.className = "plateCell";
        this.box.style.border = this.borderStyle;
        this.box.style.backgroundColor=this.colorCell;
        this.box.style.boxSizing =this.boxSizingCell;
        this.box.style.textAlign = "center";
        parentBox.appendChild(this.box);
        return this;
    },
    setCellText: function(innerText){
        this.innerObject=innerText;
        this.box.innerHTML=this.innerObject;
    },
    setCellColor: function(color){
        this.colorCell = color;
        this.box.style.backgroundColor = this.colorCell;
    },
    setCellSize: function(size){
        this.sizeCell=size;
        this.box.style.width = this.sizeCell + "px";
        this.box.style.height = this.sizeCell + "px";
    },
    setCellBorder: function(cellBorder){
        this.borderStyle = cellBorder;
        this.box.style.border=this.borderStyle;
    },
    setCellTextOver: function(){
        this.box.style.transform = "rotate(180deg)";
    }
}
var plateChekh={
    
    cells: [],
    plate: null,
    plateId:"plateCell",
    literCell:["A","B","C","D","E","F","G","H"],
    literFigure:["Л","K","C","Кр","Ф","С","К","Л"],
    getSideLength: function()  {
        if (screen.availWidth >= screen.availHeight) {
            return screen.availHeight * 0.7;
        }
        else {
            return screen.availHeight * 0.7;
        };
    },
    getCellLength: function(sideLength) {
        return sideLength / 10;
    },
    addCell: function() {
        for (var j = 0; j<10;j++){
            var cellsLine=[];
            for (var i = 0; i < 10; i++) {
                var nCell=cell.newCell(this.plate);
                cellsLine.push(nCell);
                nCell.setCellSize(this.getCellLength(this.getSideLength()));
                this.plate.appendChild(nCell.box);
                switch (j){
                    case 0:
                        if ((i>0)&&(i<9)){
                            nCell.setCellText("<p>" + this.literCell[i-1] + "</p>");
                            nCell.setCellColor("#fff");
                        };
                        break;
                    
                    case 9:
                        if ((i>0)&&(i<9)){
                            nCell.setCellText("<p>" + this.literCell[i-1] + "</p>");
                            nCell.setCellColor("#fff");
                            nCell.setCellTextOver();
                        };
                        break;
                    
                    default:{
                        switch (i){
                            case 0:
                                nCell.setCellText("<p>" + j + "</p>");
                                nCell.setCellBorder("0 solid #000");
                                nCell.setCellColor("#fff");
                                break;
                            case 9:
                                nCell.setCellText("<p>" + j + "</p>");
                                nCell.setCellBorder("0 solid #000");
                                nCell.setCellColor("#fff");
                                nCell.setCellTextOver();
                                break;
                            
                            default:{
                                if ((j==1)||(j==8)){
                                    nCell.setCellText("<p style='color:green'>" + this.literFigure[i-1] + "</p>");
                                }
                                if ((j==2)||(j==7)){
                                    nCell.setCellText("<p style='color:green'> п </p>");
                                }
                                if((i+j+1)%2) {
                                    
                                    nCell.setCellColor("#fff");
                                }
                                else{
                                   nCell.setCellColor("#000"); 
                                }
                                 nCell.setCellBorder("1px solid #000");
                            }
                               
                                
                        }
                       
                        break;
                    }
                        
                }
                
                
                
            };
            this.cells.push(cellsLine);
        }
        
    },
    createPlate: function(){
        this.plate = document.createElement("div");
        this.plate.id = "chekhPlate";
        document.body.parentElement.appendChild(this.plate);
        this.plate.style.width = this.getSideLength() + "px";
        this.plate.style.height = this.getSideLength() + "px";
        this.plate.style.margin = "0 auto";
        this.plate.style.border = "4px double black";
        this.plate.style.display = "flex";
        this.plate.style.flexWrap = "wrap";
        this.plate.style.justifyContent="center";
        this.addCell();
        
    }

}

/*var figure={
    color: "white",
    coordinates: ["",""]
}*/



var newPlate=plateChekh;
newPlate.createPlate();



