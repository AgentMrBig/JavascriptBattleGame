
const test = new Entity(12, 20, 20, 100, 10, "test1", "ellipse")

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 22);
}

function draw() {
    background(000);
    //test.drawEntity("ellipse");
    //ellipse(50, 50, 80, 80);
    //testEllipse();

    test.drawEntity();
}

function testEllipse() {
    return ellipse(80, 50, 80, 80);
}

console.log(test)