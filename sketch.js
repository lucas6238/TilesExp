

//size of the blocks
var sizeSquare = 20;
var blockX = sizeSquare;
var blockY = sizeSquare;

var NumBlocksX;
var NumBlocksY;

var numRings = 5;
var ring = [];
var tile = [];
//total number of tiles
var total;
var SizeW = 600;
var SizeH = 600;
  //number of blocks per side


function setup() {
  frameRate(10);
  
  var cvn = createCanvas(SizeW,SizeH);
  cvn.parent("sketch-holder");
  
var NumBlocksX = (floor(SizeW/blockX));
var NumBlocksY = (floor(SizeH/blockY)) ;
 total = (NumBlocksX  * NumBlocksY) -1;


  //this loop is for creating the tiles
  for(var i = 0; i<=total; i++){
    tile.push(new Tile());
    tile[i].selectColor(i);
    
    }
    setTilePositions(tile,NumBlocksX,NumBlocksY);
   
    
  // flipRing(2,tile,224,tile[224].x,tile[224].y,NumBlocksX,NumBlocksY);
   setRings(numRings);
  
}

function draw() {
  
   var SizeW = 600;
  var SizeH = 600;
  var NumBlocksX = (floor(SizeW/blockX));

var NumBlocksY = (floor(SizeH/blockY)) ;

 total = (NumBlocksX  * NumBlocksY) -1;
 
  for(var i = 0; i<tile.length; i++){
    
  tile[i].render();
  //this clears the screen
 //tile[i].selectColor(1);

  
  }
   for(var i =0; i<numRings;i++){
    ring[i].drawRings(tile,NumBlocksX,NumBlocksY);
    ring[i].counter++;
   }
   
    
 
}



function setRings(numRings){
  for(var i =0; i<numRings;i++){
    ring.push(new Ring());
    ring[i].setColor();
    ring[i].setLocation(i,total);
  }
}


function setTilePositions(tile,NumBlocksX,NumBlocksY){
 
  

  
  var counterX = 0;
  var counterY = 0;
  var counter = 0;
  //outer loop that adds to the y
    for(var j = 0; j <NumBlocksY; j++){
      //inner loop that adds to the x
      for(var i = 0; i <NumBlocksX; i++){
        //console.log("set loop "+ counter + " " + counterX + " " + counterY);
        //add 10 each time to x
       
        tile[counter].x = counterX;
        tile[counter].y = counterY;
        
        counterX += blockX;
        counter++;
        
       
      }
      
      //add 10 each time to y
      
        counterX = 0;
      counterY += blockY;
     
    
      
      
    }
   
}












  
  
  
    
    
  
      
  
  
 

