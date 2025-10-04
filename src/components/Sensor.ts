import type p5 from "p5";
import type { singlyLinkedList } from "../utils/LinkedList";
import { FieldLines } from "./FieldLines";
import type { Particle } from "./particle";

export class ElectricFieldSensor extends FieldLines {
    public dragging = false;
    public radius = 10;
    private maxArrowLenght = 150;
    protected arrowColor: string = "orange";
    constructor(public x: number, public y: number, p: p5, particles: singlyLinkedList<Particle>) {
        super(p, particles);
    }

    public draw() {
        if (this.dragging && this.p.mouseButton.left) {
            this.x = this.p.constrain(this.p.mouseX, this.radius, this.p.width - this.radius);
            this.y = this.p.constrain(this.p.mouseY, this.radius, this.p.height - this.radius);
        }
        const [Ex, Ey] = this.calculateElectricField(this.x, this.y);
        const magnitude = Math.sqrt((Ex ** 2) + (Ey ** 2));
        if (magnitude === 0) {
            return;
        }

        this.p.push();
        this.p.fill("red");
        this.p.stroke("white");
        this.p.strokeWeight(2);
        this.p.ellipse(this.x, this.y, this.radius * 2);

        const scale = this.maxArrowLenght / magnitude;
        const finalPointX = this.x +  (Ex * scale);
        const finalPointY = this.y +  (Ey * scale);
        this.p.pop();
        this.drawArrow(this.x, this.y,finalPointX,finalPointY);
    }

    public mousePressed(): void {
        const { mouseX, mouseY } = this.p;
        const distance = this.p.dist(mouseX, mouseY, this.x, this.y);
        if (distance < this.radius) {
            this.dragging = true;
        }
    }

    public mouseReleased(): void {
        this.dragging = false;
    }

    public isCollidingWith(other: Particle | ElectricFieldSensor): boolean {
        const distance = this.p.dist(this.x, this.y, other.x, other.y);
        return distance < (this.radius + other.radius);
    }

    // Resolver colisión con otra partícula
    public resolveCollision(other: Particle | ElectricFieldSensor): void {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const distance = this.p.dist(this.x, this.y, other.x, other.y);

        // Si están exactamente en la misma posición, separar con un offset aleatorio
        if (distance === 0) {
            const angle = this.p.random(0, this.p.TWO_PI);
            const separation = this.radius + other.radius + 1;
            other.x = this.x + this.p.cos(angle) * separation;
            other.y = this.y + this.p.sin(angle) * separation;
            return;
        }

        // Calcular overlap (cuánto se están superponiendo)
        const minDistance = this.radius + other.radius;
        const overlap = minDistance - distance;

        if (overlap > 0) {
            // Normalizar el vector de dirección
            const nx = dx / distance;
            const ny = dy / distance;

            // Si una está siendo arrastrada, solo mover la otra
            if (this.dragging) {
                other.x += nx * overlap;
                other.y += ny * overlap;
            } else if (other.dragging) {
                this.x -= nx * overlap;
                this.y -= ny * overlap;
            } else {
                // Si ninguna está siendo arrastrada, separar ambas por la mitad
                const separationX = nx * overlap * 0.5;
                const separationY = ny * overlap * 0.5;

                this.x -= separationX;
                this.y -= separationY;
                other.x += separationX;
                other.y += separationY;
            }

            // Mantener dentro de los límites del canvas
            this.x = this.p.constrain(this.x, this.radius, this.p.width - this.radius);
            this.y = this.p.constrain(this.y, this.radius, this.p.height - this.radius);
            other.x = this.p.constrain(other.x, other.radius, this.p.width - other.radius);
            other.y = this.p.constrain(other.y, other.radius, this.p.height - other.radius);
        }
    }
}