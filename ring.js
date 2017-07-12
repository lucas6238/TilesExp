function Ring() {
  this.pos = -1;
  this.counter = 0;
  this.Stop = false;
  this.col = color(0, 0, 0);
  this.resetCounter = function() {
    this.counter = 0;
  }
  this.setLocation = function(i,total) {
    
    this.pos = floor(random(total));
  }
  this.setColor = function() {
    var r = floor(random(255));
    var g = floor(random(255));
    var b = floor(random(255));
    var a = floor(random(255));
    this.col = color(r, g, b,a);
  }


  this.drawRings = function(NumBlocksX, NumBlocksY) {

  //this is the check to see if the ring has expanded off the screen
    if (
       (tile[this.pos].x + (blockX * this.counter) <= SizeW) ||
       (tile[this.pos].x - (blockX * this.counter) >= 0) ||
       (tile[this.pos].y + (blockY * this.counter) <= SizeH) ||
       (tile[this.pos].y - (blockY * this.counter) >= 0)
     ) {
     
    //console.log((tile[pos].y + (blockY * count)));
    // tile[this.pos].changeColor(this.col);
    // flipRing(this.count,tile,this.pos,tile[this.pos].x,tile[this.pos].y,NumBlocksX,NumBlocksY);

    //  ring,tile,initalPos,NumBlocksX,NumBlocksY)

    var ringY = this.counter * blockY;
    var ringX = this.counter * blockX;

    var ringUY = tile[this.pos].y - ringY;
    var ringDY = tile[this.pos].y + ringY;

    var ringLX = tile[this.pos].x - ringX;
    var ringRX = tile[this.pos].x + ringX;
    //console.log(this.counter);





    //tile[this.pos].changeColor(this.col);



    for (var i = 0; i < tile.length; i++) {
      if ((tile[i].y == ringUY) || (tile[i].y == ringDY)) {
        if ((tile[i].x > ringLX) && (tile[i].x < ringRX)) {
          tile[i].changeColor(this.col);
        }

      }


      if ((tile[i].x == ringRX) || (tile[i].x == ringLX)) {
        if ((tile[i].y >= ringUY) && (tile[i].y <= ringDY)) {
          tile[i].changeColor(this.col);
        }
      }
    }
     }

     else {
      // reset ringCounter[i] =0 it restarts the loop;
      this.counter = 0;
    }

  }
}