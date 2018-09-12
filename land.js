/**
 * Created by Ryan on 3/29/201722.
 */
function Land(option){
    this.ctx = option.ctx;
    this.x = option.x;
    this.y = option.y;
    this.img = option.img;
    this.width = this.img.width;
    this.height = this.img.height;
    this.speed = 2;
}
// prototype
Land.prototype = {
    constructor: Landa,
    draw: function () {
        this.x -= this.speed;
        if(this.x < -this. width){
            this.x += 4 * this.width;
        }
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}