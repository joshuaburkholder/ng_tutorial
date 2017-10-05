var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    Point.prototype.getDistance = function () {
        console.log(this.x - this.y);
    };
    return Point;
}());
