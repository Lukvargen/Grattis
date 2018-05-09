class Ball {
    constructor(x, y, targetX, targetY, color) {
        this.x = x;
        this.y = y;

        this.size = windowWidth / 300;
        this.color = color;

        this.targetX = targetX;
        this.targetY = targetY;
    }
    
    update() {
        this.x = lerp(this.x, this.targetX, 0.2);
        this.y = lerp(this.y, this.targetY +sin(time) * windowHeight / 5, 0.2);


    }
    
    draw() {
        noStroke();
        fill(this.color);
        ellipse(this.x , this.y, this.size);

    }

}