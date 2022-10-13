class Fish {
  constructor(/*direction*/) {
    this.x = 600;
    this.y = 400;
    this.width = 30;
    this.height = 30;
    //this.direction = direction;
  }

  draw() {
    const yellowfish = new Image();
    yellowfish.src = "./images/Icons_04.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
  }

  /*moveLeft() {
    this.direction = "left";
    if (this.x > 0) {
      this.x -= this.dx;
    }
  }
  moveRight() {
    this.direction = "right";
    if (this.x < canvas.width - this.width) {
      this.x += this.dx;
    }
  }*/
}
