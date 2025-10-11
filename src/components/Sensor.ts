import type { singlyLinkedList } from "@utils/LinkedList";
import type { Particle } from "@components/particle";
import type p5 from "p5";
import { CollissionObject } from "./CollisionObject";

export class ElectricFieldSensor extends CollissionObject{
    public dragging = false;
    public isMouseOver = false;
    public radius = 10;
    private maxArrowLenght = 150;
    protected arrowColor: string = "orange";
    private METERS_PER_PIXEL = 1e-10;
    private sensors: singlyLinkedList<ElectricFieldSensor>;
    
    constructor(public x: number, public y: number, protected p: p5, private particles: singlyLinkedList<Particle>, sensors: singlyLinkedList<ElectricFieldSensor>) {
        super(x,y,p,10);
        this.sensors = sensors;
    }

    public draw() {
        if (this.dragging && this.p.mouseButton.left) {
            this.x = this.p.constrain(this.p.mouseX, this.radius, this.p.width - this.radius);
            this.y = this.p.constrain(this.p.mouseY, this.radius, this.p.height - this.radius);
        }

        if (this.isMouseOver && this.p.key.toLowerCase() === "x") {
            this.delete();
        }

        const [Ex, Ey] = this.calculateElectricField(this.x, this.y);
        const magnitude = Math.sqrt((Ex ** 2) + (Ey ** 2));
        if (magnitude === 0) {
            this.delete();
            return;
        }

        this.p.push();
        this.isMouseOver && this.p.cursor('grab');
        this.p.fill("red");
        this.p.stroke("white");
        this.p.strokeWeight(2);
        this.p.ellipse(this.x, this.y, this.radius * 2);

        const scale = this.maxArrowLenght / magnitude;
        const finalPointX = this.x + (Ex * scale);
        const finalPointY = this.y + (Ey * scale);
        this.p.pop();
        this.drawArrow(this.x, this.y, finalPointX, finalPointY);
    }

    public drawArrow(x1: number, y1: number, x2: number, y2: number) {
        // Línea principal
        this.p.push();
        this.p.stroke(this.arrowColor)
        this.p.fill(this.arrowColor); // Mismo color que la línea
        this.p.line(x1, y1, x2, y2);

        // Calcular ángulo
        const angle = this.p.atan2(y2 - y1, x2 - x1);
        const arrowSize = 10;

        this.p.translate(x2, y2);
        this.p.rotate(angle);

        // Dibujar triángulo sólido
        this.p.noStroke();
        this.p.triangle(
            0, 0,                           // Punta
            -arrowSize, arrowSize / 2,      // Esquina superior
            -arrowSize, -arrowSize / 2      // Esquina inferior
        );

        this.p.pop();
    }

    public calculateElectricField(x: number, y: number): [number, number] {
        const particlesArr = this.particles.toArray();
        let ExTotal = 0;
        let EyTotal = 0;

        for (let particle of particlesArr) {
            let dx = (x - particle.x) * this.METERS_PER_PIXEL;
            let dy = (y - particle.y) * this.METERS_PER_PIXEL;

            const k = 8.99 * (10 ** 9);
            const r = Math.sqrt((dx ** 2) + (dy ** 2));
            // console.table({
            //     r,
            //     q: particle.chargeInCoulombs,
            //     k
            // });

            if (r < particle.radius * this.METERS_PER_PIXEL) {
                continue;
            }

            if (particle.chargeInCoulombs === 0) {
                continue;
            }

            const r3 = r ** 3;

            const Ex_particle = k * particle.chargeInCoulombs * dx / r3;
            const Ey_particle = k * particle.chargeInCoulombs * dy / r3;

            ExTotal += Ex_particle;
            EyTotal += Ey_particle;
        }

        return [ExTotal, EyTotal];
    }

    private delete() {
        const index = this.sensors.getIndexOf(this);
        this.sensors.remove(index);
    }
}