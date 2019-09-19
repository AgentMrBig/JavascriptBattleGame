class Entity {
    constructor(x, y, r, startLife, startSpeed, _id, entityType) {
        this._id = _id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.startLife = startLife;
        this.startSpeed = startSpeed;
        this.entityType = entityType;
    }


    drawEntity() {
        // if (entityType === "ellipse") {
        //     return ellipse(50, 50, 80, 80);
        // }

        return ellipse(100, 100, 80, 80);

    }
}

