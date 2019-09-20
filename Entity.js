// Entity todos and notes:
// Add a hidden ellilpse that will be used for "collision checks" for a sensory system, for example
//  a hidden ellipse that is about 3 to 4 times larger than the entity, a collision to this sensory
//  ellipse will allow the entity to sense the object or entity and determine its actions based on what
//  is sensed.

class Entity {
    constructor(x, y) {
        this._id = 0;
        this.x = x;
        this.y = y;
        this.r = this.startSize;
        this.startSize = 200;
        this.startLife = 100;
        this.startSpeed = 5;
        this.lifespan = 100;
        this.size = this.startSize;
        this.birthMoment = 0;
        this.isAlive = true;
    }

    // Get_birthMoment() gets the year.month.day.hour.minute.second.millisecond time once and set that to the
    // birthMoment property as well as the _id property as this time string will be unique
    // so all _id's will be unique. This will also allow us to tell the entity age.
    Get_birthMoment() {
        if (this.birthMoment == 0) {
            this.birthMoment = year() + '.' + month() + '.' + day() + '.' + hour() + '.' + minute() + '.' + second() + '.' + millis();
        }
        if (this._id == 0 && this.birthMoment != 0) {
            this._id = this.birthMoment;
        }
        textSize(18);
        text(this.birthMoment, 200, 200);

    }

    EntitySetup() {
        push();
        translate(window.innerHeight / 2, window.innerWidth / 2);
        strokeWeight(2)
        stroke(100, 100, 100, 100);
        noFill();
        circle(this.x, this.y, this.startSize);

        pop();

    }

    // drawEntity is where we will define how we want our entity to look
    DrawEntity() {
        //If the entity is alive, draw the entity
        if (this.isAlive) {
            this.EntitySetup();
            translate(window.innerHeight / 2, window.innerWidth / 2);
            rotate(-90);
            push();

            pop();
            strokeWeight(2)
            stroke(100, 0, 0, 100);
            noFill();
            let lifeAngleBar = map(this.lifespan, 0, 100, 0, 360);
            arc(0, 0, this.size - 10, this.size - 10, 0, lifeAngleBar)

            // stroke(0, 100, 0, 100);
            // let minuteAngle = map(this.mn, 0, 60, 0, 360);
            // arc(0, 0, 280, 280, 0, minuteAngle)

            // stroke(0, 0, 100, 100);
            // let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
            // arc(0, 0, 260, 260, 0, hourAngle)
        }


    }

    SetState() {
        //TODO here I will set the state of the entity based on 
        // environment and entity property values. 
        // There will be satisfied, hungry, fear, mate, die
        // the entity state will be shown to users by the entity
        // color as well as movements
    }

    BiologicalClock() {
        if (this.lifespan > 0) {
            this.lifespan -= 0.1;

            rotate(90);
            text(this.lifespan, this.x, this.y);

        }

        if (this.lifespan <= 0) {
            this.Die();
        }

    }

    ChangeSize() {
        //this.r = random(20, 25);
    }

    // This function is for updating the entity, it is called within the main draw function 
    Update() {
        push();

        this.EntitySetup();
        this.DrawEntity();

        this.BiologicalClock();

        this.Get_birthMoment();
        pop();




    }


    // Kill the entity
    Die() {
        this.isAlive = false;
    }
}

