class Fish {
  constructor(direction) {
    this.x = 850;
    this.y = 420;
    this.width = 50;
    this.height = 50;
    this.direction = direction;
  }

  draw() {
    const yellowFish = new Image();
    yellowFish.src = "./images/Icons_04.png";
    context.drawImage(yellowFish, this.x, this.y, this.width, this.height);
    
  }

  moveLeft() {
    /*this.direction = "left";
    if (this.x > 0) {
      this.x -= this.dx;*/  
    }
  }
  

  

