new p5();

const test = new Entity(0, 0)
const clock = new Clock()

function setup() {


    createCanvas(window.innerWidth - 10, window.innerHeight - 22);
    angleMode(DEGREES);
    colorMode(RGB, 100);
}

function draw() {
    background(000);
    //test.drawEntity("ellipse");
    //ellipse(50, 50, 80, 80);
    //testEllipse();
    test.Update();


    //clock.Update();


}


