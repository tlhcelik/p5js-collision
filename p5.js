var mouseObject;
var rainObjectList = [];

function setup(){
  createCanvas(800, 500);
  mouseObject = new MousePointer();

  for (var i = 0; i < 10; i++) {
    rainObjectList.push(new Rain(random(width), random(height), random(20,30)));
  }


}

function draw() {
  background(51);
  for (var i = 0; i < rainObjectList.length; i++) {
    rainObjectList[i].startRain();
  }
  mouseObject.MousePointer();
  mouseObject.collision(rainObjectList);
  //console.log(rainObjectList[0].getX());
  //console.log(rainObjectList[0].getY());

}

function MousePointer() {
  fill(255, 204, 0);

  this.MousePointer = function(){
    ellipse(mouseX, mouseY, 1,1);
  }

  this.collision = function (collisionObjectList) {
    for (var i = 0; i < collisionObjectList.length; i++) {
      if (mouseX >= (collisionObjectList[i].getX() - collisionObjectList[i].getRadius()) &&
          mouseX <= (collisionObjectList[i].getX() + collisionObjectList[i].getRadius()) ) {

            if (mouseY >= (collisionObjectList[i].getY() - collisionObjectList[i].getRadius()) &&
                mouseY <= (collisionObjectList[i].getY() + collisionObjectList[i].getRadius()) ) {
                    collisionObjectList[i].update();
            }

      }

    }

  };
}
class Rain {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = 1;

    //will add color spesification
    //this.color = color;
  }

  getX() {
    return parseInt(this.x);
  }

  getY() {
    return parseInt(this.y);
  }

  getRadius() {
    return parseInt(this.r)-8;
  }

  delete(){
    this.r = 0;
  }

  move(){
    this.y += random(0, this.speed);
  }

  moveUp(){
      if (this.y >= height) {
        this.y = 0;
      }
  }
  update(){
    this.delete();
    this.startRain();
  }
  startRain(){
    ellipse(this.x, this.y, this.r, this.r);
    this.move();
    this.moveUp();
  }

  deleteThis(){
    return 0;
  }

}
