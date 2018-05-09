class Canon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update() {
        this.x = mouseX;
    }

    draw() {
        rectMode(CENTER)
        rect(this.x, this.y-50, 25, 100);
        rect(this.x, this.y, 100, 75);
    }
}