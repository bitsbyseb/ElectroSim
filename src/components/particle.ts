import type p5 from "p5";
import type { ElectricFieldSensor } from "./Sensor";
import type { singlyLinkedList } from "../utils/LinkedList";

interface ParticleParams {
    x: number,
    y: number,
    p: p5,
    sign: boolean | null,
    particles:singlyLinkedList<Particle>
}

export class Particle {
    private p: p5;
    public x: number;
    public y: number;
    public chargeInCoulombs = 0;
    public dragging = false;
    public sign: boolean | null;
    public readonly radius: number = 40;
    protected particles:singlyLinkedList<Particle>;

    constructor(params: ParticleParams) {
        this.x = params.x;
        this.y = params.y;
        this.p = params.p;
        this.sign = params.sign;
        this.particles = params.particles;

        if (this.sign) {
            this.chargeInCoulombs = 1.602 * (10**(-19));
        }

        if (this.sign === false) {
            this.chargeInCoulombs = -1.602 * (10**(-19));
        }

        if (this.sign === null) {
            this.chargeInCoulombs = 0;
        }
    }

    public draw() {
        if (this.dragging && this.p.mouseButton.left) {
            this.p.cursor("drag");
            this.x = this.p.constrain(this.p.mouseX, this.radius, this.p.width - this.radius);
            this.y = this.p.constrain(this.p.mouseY, this.radius, this.p.height - this.radius);
        }

        if (this.dragging && this.p.key === "x") {
            this.delete();
        }
        this.p.push();
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

    // Detectar colisión con otra partícula
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