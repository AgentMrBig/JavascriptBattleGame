class Clock {
    constructor() {
        this.hr = [];
        this.mn = [];
        this.sc = [];
    }

    ClockSetup() {
        translate(window.innerWidth / 2, window.innerHeight / 2);
        rotate(-90);

        this.hr = hour();
        this.mn = minute();
        this.sc = second();

        fill(255);
        noStroke();
        text(this.hr + ':' + this.mn + ':' + this.sc, 10, 200);

    }

    DrawClock(){

        strokeWeight(8)
        stroke(100, 0, 0, 100);
        noFill();

        let secondAngle = map(this.sc, 0, 60, 0, 360);
        arc(0, 0, 300, 300, 0, secondAngle)

        push();
        rotate(secondAngle);
        stroke(100,0,0,100);
        line(0,0, 100, 0);
        pop();

        stroke(0,100,0,100);
        let minuteAngle = map(this.mn, 0, 60, 0, 360);
        arc(0, 0, 280, 280, 0, minuteAngle)

        push();
        rotate(minuteAngle);
        stroke(0,100,0,100);
        line(0,0, 75, 0);
        pop();

        stroke(0,0,100,100);
        let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
        arc(0, 0, 260, 260, 0, hourAngle)

        push();
        rotate(hourAngle);
        stroke(0,0,100,100);
        line(0,0, 50, 0);
        pop();

        

    }

    Update(){
        push();
        this.ClockSetup();
        this.DrawClock();
        pop();
    }
}