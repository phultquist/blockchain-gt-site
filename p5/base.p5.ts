import type p5Type from 'p5'

const circles: Point[] = [];

const startScalar = 3,
    maxLayers = 6,
    accMag = 1,
    homeCutoff = 1,
    maxSpeed = 10;


export const setup = (p5: p5Type, canvasParentRef: Element): void => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    const minDim = Math.min(p5.width, p5.height);
    const r = minDim / 3;
    const inc = p5.map(r, 0, 500, 0.08, 0);

    for (let theta = 0; theta < p5.TWO_PI; theta += inc) {
        for (let layer = 0; layer < 2 + p5.random(0, maxLayers); layer++) {
            const x = (r * p5.cos(theta) + 1 * p5.random()) * Math.pow(1.03 + p5.random() * 0.02, layer),
                y = (r * p5.sin(theta) + 1 * p5.random()) * Math.pow(1.03 + p5.random() * 0.02, layer + 1);
            const alpha = p5.map(layer, 0, maxLayers, 255, 0);
            circles.push(new Point(
                p5,
                p5.createVector(x * startScalar + p5.random(-50, 50), y * startScalar + p5.random(-50, 50)),
                p5.createVector(x, y),
                p5.color(255, 255, 255, alpha),
                p5.map(layer + (p5.random() - 1), 0, maxLayers, 2, 0)
            ))
        }
    }
}

export const draw = (p5: p5Type): void => {
    p5.translate(p5.width / 2, p5.height / 2);
    p5.clear();
    p5.strokeWeight(2);
    circles.forEach(c => {
        c.flee(p5.mouseX - p5.width / 2, p5.mouseY - p5.height / 2);
        c.steer();
        c.update();
        c.show();
    });
}

const fleeRadius = 20;

export class Point {
    p: p5Type | null = null;
    position: p5Type.Vector | undefined;
    velocity: p5Type.Vector | undefined;
    acceleration: p5Type.Vector | undefined;
    home: p5Type.Vector | undefined;
    color: p5Type.Color | undefined;
    radius = 0;
    topSpeed = maxSpeed;

    constructor(_p: p5Type, start: p5Type.Vector, home: p5Type.Vector, c: p5Type.Color, r: number) {
        this.p = _p;
        this.position = start;
        this.home = home;
        this.color = c;
        this.radius = r;
        this.velocity = this.p.createVector(0, 0);
        this.acceleration = this.p.createVector(0, 0);
    }

    show() {
        this.color && this.p?.fill(this.color);
        this.color && this.p?.stroke(this.color);
        this.position && this.p?.circle(this.position.x, this.position.y, this.radius);
    }

    steer() {
        if (this.home && this.position && this.velocity) {
            // if (true) {

            const desired = this.home.copy().sub(this.position);
            const steer = desired.copy().sub(this.velocity);

            if (desired.mag() < homeCutoff && this.velocity.mag() < homeCutoff) {
                this.velocity.mult(0);
                steer.mult(0);
                return;
            }

            this.applyForce(steer);
        }
    }

    flee(mx: number, my: number) {
        if (this.p && this.position && this.velocity) {
            const desired = this.p.createVector(mx, my).sub(this.position);
            const distance = desired.mag();
            if (distance < fleeRadius) {
                desired.mult(-20);
            } else {
                return;
            }

            const fleeSteer = desired.copy().sub(this.velocity);
            this.applyForce(fleeSteer);
        }
    }

    update() {
        if (this.position && this.velocity && this.acceleration) {
            this.acceleration.setMag(accMag);
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topSpeed);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        }
    }

    applyForce(force: p5Type.Vector) {
        if (this.acceleration) {
            this.acceleration.add(force);
        }
    }
}