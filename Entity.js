// Entity todos and notes:
// Add a hidden ellilpse that will be used for "collision checks" for a sensory system, for example
//  a hidden ellipse that is about 3 to 4 times larger than the entity, a collision to this sensory
//  ellipse will allow the entity to sense the object or entity and determine its actions based on what
//  is sensed.

class Entity {
    constructor(x, y, r, sizeX, sizeY, startLife, startSpeed, _id, entityType) {
        this._id = _id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.startLife = startLife;
        this.startSpeed = startSpeed;
        this.entityType = entityType;
    }


    // drawEntity is where we will define how we want our entity to look
    DrawEntity() {
        // if (entityType === "ellipse") {
        //     return ellipse(50, 50, 80, 80);
        // }

        return ellipse(this.x, this.y, this.r * 2, this.r * 2);

    }


    SetState() {
        //TODO here I will set the state of the entity based on 
        // environment and entity property values. 
        // There will be satisfied, hungry, fear, mate, die
        // the entity state will be shown to users by the entity
        // color as well as movements
    }

    Move() {
        this.x = this.x + random(-1, 1);
    }

    Wonder(xORy, direction) {
        if (xORy === "x") {
            if (direction === "-") {
                this.x = this.x + -1;
            } else if (direction === "+") {
                this.x = this.x + 1;
            }

        } else if (xORy === "y") {
            if (direction === "-") {
                this.y = this.y + -1;
            } else if (direction === "+") {
                this.y = this.y + 1;
            }
        }
    }

    RandomDir() {

    }

    RandomXorY() {

    }



    ChangeStroke(value) {
        stroke(value);
    }

    ChangeFill(value) {
        fill(value);
    }

    ChangeSize() {
        //this.r = random(20, 25);
    }

    // This function is for updating the entity, it is called within the main draw function 
    Update() {
        this.DrawEntity();
        this.ChangeSize();
        //this.Move();
        this.ChangeFill(0o0);
        this.ChangeStroke(255);
        this.Wonder("x", "+")

    }
}

