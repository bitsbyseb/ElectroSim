import type { singlyLinkedList } from "@utils/LinkedList";
import type { Particle } from "@components/particle";
import type p5 from "p5";
import { CollissionObject } from "./CollisionObject";

interface EquipotentialParams {
    particles: singlyLinkedList<Particle>,
    potentialSensors: singlyLinkedList<Equipotential>,
    x: number,
    y: number,
    p: p5
}

export class Equipotential extends CollissionObject {
    public radius = 40;
    protected particles: singlyLinkedList<Particle>;
    protected potentialSensors: singlyLinkedList<Equipotential>;
    public x: number;
    public y: number;
    public p: p5;
    public dragging = false;
    public isMouseOver = false;
    private METERS_PER_PIXEL = 1e-10;

    constructor(params: EquipotentialParams) {
        super(params.x,params.y,params.p,40);
        this.particles = params.particles;
        this.potentialSensors = params.potentialSensors;
        this.x = params.x;
        this.y = params.y;
        this.p = params.p;
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
        this.p.fill("orange");
        this.p.stroke("white");
        this.p.strokeWeight(2);
        this.p.ellipse(this.x, this.y, this.radius * 2);

        const potential = this.calculatePotential();

        this.p.fill("white");
        this.p.stroke("orange")
        this.p.strokeWeight(2);
        this.p.textSize(18);
        this.p.text(this.formatPotential(potential), this.x - this.x*0.05, this.y - this.radius - 10)
        this.p.pop();
    }

    public calculatePotential(): number {
        const particlesArr = this.particles.toArray();
        const k = 8.99 * (10 ** 9);
        let finalPotential = 0;
        for (let particle of particlesArr) {
            const distance = this.getDistanceInMeters(this.x, this.y, particle.x, particle.y);

            if (distance < 1e-15) {
                continue;
            }



            finalPotential += k * (particle.chargeInCoulombs / distance)
        }
        return finalPotential;
    }

    private formatPotential(V: number): string {
        const absV = Math.abs(V);

        // Si es prácticamente cero
        if (absV < 1e-9) return "0.00 V";

        // Siempre en notación científica
        return V.toExponential(2) + " V";
    }

    private getDistanceInMeters(x1_px: number, y1_px: number, x2_px: number, y2_px: number): number {
        const dx_px = x2_px - x1_px;
        const dy_px = y2_px - y1_px;
        const distance_px = Math.sqrt(dx_px ** 2 + dy_px ** 2);
        return distance_px * this.METERS_PER_PIXEL;
    }

    public delete() {
        const index = this.potentialSensors.getIndexOf(this);
        this.potentialSensors.remove(index);
    }
}