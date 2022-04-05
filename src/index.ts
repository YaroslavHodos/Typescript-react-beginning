// type Person = {
//     id:number
//     name:string
//     addres?:string
// }
// const person1: Person = {id:123,name:'Moshe',addres:'Lod'};
// const person2: Person = {id:124, name: 'Sara'};
// type Employee = Person & {
//     salary: number
// }
// interface IEmployee extends Person {
//     salary: number
// }
// const employee1: Employee = {id:123,name:'Moshe',salary:10000};
// const employee2: Employee = {id:124,name:'Sara',salary:10000,addres:'Lod'};
// interface IPerson {
//     addres: string
// }

interface Shape {
    draw(): void;
}
class Point implements Shape {
    static readonly minValue = -100;
    static readonly maxValue = 100;
    static checkValue(value: number) {
        if(value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in range [from${Point.minValue} to ${Point.maxValue}]`
        }
    }
    constructor(private _x: number, private _y: number) {
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set  x(value:number) {
        Point.checkValue(value);
        this._x = value;
    }
    set  y(value:number) {
        Point.checkValue(value);
        this._y = value;
    }
    draw(): void {
    console.log(`Point [x: ${this._x}, y: ${this._y}]`)
    }
}
class Line extends Point {
    constructor(x:number,y:number, private _point:Point) {
        super(x,y);
    }
    draw() {
        console.log('------Line------')
        super.draw();
        this._point.draw();
        console.log('-'.repeat(20));
    }
    get point() {
        return this._point;
    }
}
class Square extends Point {
    constructor(x:number,y:number,private _width:number) {
        super(x,y);
    }
    get width() {
        return this._width;
    }
    draw() {
        console.log('--------Square--------')
        super.draw();
        console.log(`width: ${this._width}`);
        console.log('-'.repeat(20));
    }
}
class Rectangle extends Square {
    constructor(x:number,y:number,width:number,private _height:number) {
        super(x,y,width);
    }
    draw() {
        console.log('=======Rectangle=======');
        super.draw();
        console.log(`height: ${this._height}`);
        console.log('='.repeat(20));
    }
}
const shape:Shape = new Square(3,4,10);// Upper casting
//way of specific methods call
// if(shape instanceof Square) {
//     console.log(shape.width);
// }

//demo of seting usage with checking and following exception
// const point:Point = new Point(10,10);
// point.draw();
// point.x = 200;
// point.draw();

const shapes:Shape[] = [
    new Line(3,4,new Point(10,10)),
    new Square(2,5,10),
    new Line(20,30,new Point(3,4)),
    new Rectangle(10,15,20,5)
]
shapes.forEach(shape => shape.draw());

//HW#33
class Canvas implements Shape {
    private _shapes:Shape[] = []
    draw(): void {
        //TODO write method draw for drawing all shapes in the canvas
        this._shapes.forEach(s => s.draw())
    }
    addShape(shape:Shape): number {
        //TODO write method adding the given shape iside _shapes
        //return an index of added shape
        return this._shapes.push(shape) -1;
    }
    removeShape(index:number): Shape {
        //TODO write method removing a shae at the given index
        //returns reference to the removed shape
        return this._shapes.splice(index, 1)[0];
    }
    sort(): void {
        //TODO write method sorting the shapes in the folowig order
        //ascending order of the properti x
        //in case of equaled x values - desendig order of the propery y
        this._shapes.sort((a,b) => a instanceof Point && b instanceof Point ?
        b.x - a.x || a.y - b.y : 0)
    }
    removeIf(predicate: (shae:Shape) => boolean) {
        //TODO write methodremoving all the shapes machin the given predicate function
        //write function for testing the method remveIf with the following predicate:
        //remove all lines having the properti x of second point greater then the properti x of first point
        this._shapes = this._shapes.filter(s => !predicate(s))
    }
}

const canvas = new Canvas();
canvas.addShape(new Line(3,4, new Point(2,4)));
canvas.addShape(new Line(3,4, new Point(4,3)));
canvas.addShape(new Rectangle(10,2,50,20));
canvas.addShape(new Square(5,50,30));
canvas.addShape(new Square(5,5,30));
canvas.addShape(new Line(3,4, new Point(4,3)));
console.log (`removed shape is ${JSON.stringify(canvas.removeShape(5))}`)
canvas.sort();
console.log('/////////////////////////draw before reomoving/////////////////////////');
canvas.draw();
console.log('/////////////////////////draw after reomoving/////////////////////////');
canvas.removeIf(s => s instanceof Line && s.point.x > s.x);
canvas.draw();
