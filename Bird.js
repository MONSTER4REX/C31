class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.arr = []
  }

  display() {
   if(this.body.velocity.x>5 && this.body.position.x>200)
   {
    var pos = [this.body.position.x,this.body.position.y]
   this.arr.push(pos)
   }
   for(var i = 0; i<this.arr.length; i++){
     image(this.smokeimage,this.arr[i][0],this.arr[i][1]);
   
   }

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
