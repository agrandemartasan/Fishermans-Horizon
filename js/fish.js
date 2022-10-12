class Fish {
  constructor(width, height, x, y, direction) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  moveLeft() {
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
  }
}
