
const test = new Entity(200, 200, 25, 50, 50, 10, "test1", "ellipse")

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 22);
}

function draw() {
    background(000);
    //test.drawEntity("ellipse");
    //ellipse(50, 50, 80, 80);
    //testEllipse();

    test.Update();
}



console.log(test)