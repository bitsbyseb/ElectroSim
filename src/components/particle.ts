import type { singlyLinkedList } from "@utils/LinkedList";
import type p5 from "p5";
import { CollissionObject } from "./CollisionObject";

interface ParticleParams {
    x: number,
    y: number,
    p: p5,
    sign: boolean | null,
    particles: singlyLinkedList<Particle>
}

export class Particle extends CollissionObject {
    protected p: p5;
    public x: number;
    public y: number;
    public chargeInCoulombs = 0;
    public dragging = false;
    public isMouseOver = false;
    public sign: boolean | null;
    public readonly radius: number = 40;
    protected particles: singlyLinkedList<Particle>;

    constructor(params: ParticleParams) {
        super(params.x,params.y,params.p,40);
        this.x = params.x;
        this.y = params.y;
        this.p = params.p;
        this.sign = params.sign;
        this.particles = params.particles;

        if (this.sign) {
            this.chargeInCoulombs = 1.602 * (10 ** (-19));
        }

        if (this.sign === false) {
            this.chargeInCoulombs = -1.602 * (10 ** (-19));
        }

        if (this.sign === null) {
            this.chargeInCoulombs = 0;
        }
    }

    public draw() {
        if (this.dragging && this.p.mouseButton.left) {
            this.x = this.p.constrain(this.p.mouseX, this.radius, this.p.width - this.radius);
            this.y = this.p.constrain(this.p.mouseY, this.radius, this.p.height - this.radius);
        }

        if (this.isMouseOver && this.p.key.toLowerCase() === "x") {
            this.delete();
        }

        this.p.push();
        this.isMouseOver && this.p.cursor('grab');
        this.p.fill(this.sign ? "red" : this.sign === null ? "white" : "blue");
        this.p.stroke("white");
        this.p.strokeWeight(4);
        this.p.ellipse(this.x, this.y, this.radius * 2);
        this.p.strokeWeight(0);
        this.p.fill(this.sign === null ? "black" : "white");
        this.p.textSize(50);
        this.p.textAlign(this.p.CENTER, this.p.CENTER);
        this.p.text(
            this.sign ? "+" : this.sign === null ? "n" : "-",
            this.x,
            this.y
        );
        this.p.pop();
    }

    private delete() {
        const index = this.particles.getIndexOf(this);
        this.particles.remove(index);
    }
}