
class Point {

    constructor(private x?: number, private y?:number) {

    }
    draw() {
        console.log(this.x,this.y);
    }
    get X(){
        return this.x;
    }
    set X(value){
        if(value < 0) 
            throw new Error("no")
        this.x = value;
    }
    
}

let point = new Point(1,2);
point.draw();
let x = point.X;
point.X = 10;

