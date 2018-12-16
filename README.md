
# p5.js Mouse Pointer with Collision Object Classes 
<p align="center">
  <img width="100" height="100" src="https://github.com/tlhcelik/p5js-collision/blob/master/p5.png">
</p>
<hr>


[**Open Project in the p5Js Web Editor**](https://editor.p5js.org/tlhcelik/full/S1-EoH4lE)

```html
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
    <script  src="p5_collide2d.js"></script>
  </head>
```
<p align="center">
  <img  src="https://github.com/tlhcelik/p5js-collision/blob/master/ss.jpg">
</p>
Yellow circles had created by p5.js code.

```javascript
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
```
**When mouse pointer collide this object, set to radius 0. In this way can **unvisible** this object or you can **delete** object.**
<p align="center">
  <img  src="https://github.com/tlhcelik/p5js-collision/blob/master/ss2.jpg">
</p>
<p align="center">
  <img  src="https://github.com/tlhcelik/p5js-collision/blob/master/ss3.jpg">
</p>

